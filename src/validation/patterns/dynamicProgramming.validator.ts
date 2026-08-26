import ts from "typescript";
import { allNodes, hasMethodCall, hasNewExpression, patternBinaries, patternNodes } from "../ast/nestedFunctionQueries";
import type { PatternValidator, RuleValidator } from "../types";

const baseCase: RuleValidator = (context) => patternNodes(context).some((node) =>
  ts.isIfStatement(node) && allNodes(node.thenStatement).some(ts.isReturnStatement));
const recursiveCall: RuleValidator = (context) => patternNodes(context).filter(ts.isFunctionLike).some((fn) => {
  const name = (ts.isFunctionDeclaration(fn) || ts.isFunctionExpression(fn)) && fn.name ? fn.name.text : null;
  return Boolean(name && allNodes(fn).some((node) => node !== fn && ts.isCallExpression(node)
    && ts.isIdentifier(node.expression) && node.expression.text === name));
});
const memoInitializer: RuleValidator = (context) => hasNewExpression(context, "Map") || patternNodes(context).some(ts.isArrayLiteralExpression);
const memoLookup: RuleValidator = (context) => (hasMethodCall(context, "has") && hasMethodCall(context, "get"))
  || patternNodes(context).some(ts.isElementAccessExpression);
const memoWrite: RuleValidator = (context) => hasMethodCall(context, "set") || patternBinaries(context).some((node) =>
  ts.isElementAccessExpression(node.left) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken);

export const dynamicProgrammingValidator: PatternValidator = { patternId: "dynamic-programming", variants: {
  "top-down-memoization": { "base-case": baseCase, "recursive-call": recursiveCall, "memo-initializer": memoInitializer, "memo-lookup": memoLookup, "memo-write": memoWrite },
} };
