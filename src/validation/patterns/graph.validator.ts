import ts from "typescript";
import { hasMethodCall, hasNewExpression, patternCalls, patternLoops, patternNodes } from "../ast/nestedFunctionQueries";
import type { PatternValidator, RuleValidator } from "../types";

const visitedSet: RuleValidator = (context) => hasNewExpression(context, "Set") && hasMethodCall(context, "has") && hasMethodCall(context, "add");
const graphNeighborLoop: RuleValidator = (context) => patternLoops(context).some((loop) => /graph\s*\[/.test(loop.getText()))
  && hasMethodCall(context, "has") && hasMethodCall(context, "add");
const recursiveNeighborVisit: RuleValidator = (context) => {
  const helpers = patternNodes(context).flatMap((node) => ts.isFunctionDeclaration(node) && node.name ? [node.name.text] : []);
  return helpers.some((name) => patternCalls(context).filter((call) => ts.isIdentifier(call.expression) && call.expression.text === name).length >= 2);
};
const graphWorklist: RuleValidator = (context, drill) => {
  const needed = drill.validation.variant === "graph-dfs-iterative" ? "pop" : "push";
  return patternLoops(context).length >= (drill.validation.variant === "graph-bfs" ? 3 : 2)
    && hasMethodCall(context, needed) && hasMethodCall(context, "push");
};
const capturesLevelSize: RuleValidator = (context) => patternNodes(context).some((node) =>
  ts.isVariableDeclaration(node) && Boolean(node.initializer && /\.length$/.test(node.initializer.getText())));

export const graphValidator: PatternValidator = { patternId: "graph", variants: {
  "graph-dfs-recursive": { "visited-set": visitedSet, "graph-neighbor-loop": graphNeighborLoop, "recursive-neighbor-visit": recursiveNeighborVisit },
  "graph-dfs-iterative": { "visited-set": visitedSet, "graph-worklist": graphWorklist, "graph-neighbor-loop": graphNeighborLoop },
  "graph-bfs": { "visited-set": visitedSet, "graph-worklist": graphWorklist, "graph-neighbor-loop": graphNeighborLoop, "captures-level-size": capturesLevelSize },
} };
