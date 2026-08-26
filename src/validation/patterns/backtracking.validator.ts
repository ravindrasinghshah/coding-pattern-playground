import ts from "typescript";
import { allNodes, hasMethodCall, patternNodes } from "../ast/nestedFunctionQueries";
import type { PatternValidator, RuleValidator } from "../types";

const baseCase: RuleValidator = (context) => patternNodes(context).some((node) =>
  ts.isIfStatement(node) && allNodes(node.thenStatement).some(ts.isReturnStatement));
const recursiveCall: RuleValidator = (context) => patternNodes(context).filter(ts.isFunctionLike).some((fn) => {
  const name = (ts.isFunctionDeclaration(fn) || ts.isFunctionExpression(fn)) && fn.name ? fn.name.text : null;
  return Boolean(name && allNodes(fn).some((node) => node !== fn && ts.isCallExpression(node)
    && ts.isIdentifier(node.expression) && node.expression.text === name));
});
const stateChange: RuleValidator = (context) => hasMethodCall(context, "push");
const stateRestore: RuleValidator = (context) => {
  const source = context.primaryFunction!.getText();
  return hasMethodCall(context, "pop") && source.indexOf("push") < source.indexOf("pop");
};

export const backtrackingValidator: PatternValidator = { patternId: "backtracking", variants: {
  backtracking: { "base-case": baseCase, "recursive-call": recursiveCall, "state-change": stateChange, "state-restore": stateRestore },
} };
