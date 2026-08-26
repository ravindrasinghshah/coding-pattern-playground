import ts from "typescript";
import type { ValidationContext } from "./context";

export function allNodes(root: ts.Node): ts.Node[] {
  const result: ts.Node[] = [];
  const visit = (node: ts.Node): void => {
    result.push(node);
    ts.forEachChild(node, visit);
  };
  visit(root);
  return result;
}

export function patternNodes(context: ValidationContext): ts.Node[] {
  return context.primaryFunction ? allNodes(context.primaryFunction) : [];
}

export const patternCalls = (context: ValidationContext, method?: string) =>
  patternNodes(context).filter(ts.isCallExpression).filter((call) => !method
    || (ts.isPropertyAccessExpression(call.expression) && call.expression.name.text === method));

export const patternLoops = (context: ValidationContext) =>
  patternNodes(context).filter((node): node is ts.IterationStatement => ts.isIterationStatement(node, false));

export const patternBinaries = (context: ValidationContext) => patternNodes(context).filter(ts.isBinaryExpression);
export const hasMethodCall = (context: ValidationContext, method: string) => patternCalls(context, method).length > 0;
export const hasNewExpression = (context: ValidationContext, name: string) => patternNodes(context).some((node) =>
  ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === name);
