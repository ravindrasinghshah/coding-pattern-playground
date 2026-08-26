import ts from "typescript";
import { patternBinaries, patternCalls, patternLoops, patternNodes } from "../ast/nestedFunctionQueries";
import type { PatternValidator, RuleValidator } from "../types";

const binaryBounds: RuleValidator = (context) => patternLoops(context).some((loop) => {
  const value = loop.getText();
  return /left|low|start/.test(value) && /right|high|end/.test(value) && /[<>]=?/.test(value);
});
const midpoint: RuleValidator = (context) => patternNodes(context).some((node) => ts.isVariableDeclaration(node)
  && Boolean(node.initializer && /Math\.floor/.test(node.initializer.getText()) && /\+/.test(node.initializer.getText()) && /\/\s*2/.test(node.initializer.getText())));
const boundUpdates: RuleValidator = (context, drill) => {
  const source = context.primaryFunction!.getText();
  const leftUp = /(?:left|low|start)\s*(?:=|\+=)\s*(?:mid\s*\+\s*1|[^;]*\+\s*1)/.test(source);
  const rightDown = /(?:right|high|end)\s*(?:=|-=)\s*(?:mid\s*-\s*1|[^;]*-\s*1)/.test(source);
  if (drill.validation.variant === "binary-search-left" || drill.validation.variant === "binary-search-right") {
    return leftUp && /(?:right|high|end)\s*=\s*mid\b/.test(source);
  }
  return leftUp && rightDown;
};
const targetComparison: RuleValidator = (context) => patternBinaries(context).some((node) => /\[[^\]]+\]/.test(node.getText()) && /target|goal|key/.test(node.getText()));
const predicateCheck: RuleValidator = (context) => patternCalls(context).some((call) => call.arguments.some((argument) => /mid/.test(argument.getText())));
const variants = ["binary-search", "binary-search-left", "binary-search-right", "binary-search-minimum", "binary-search-maximum"] as const;

export const binarySearchValidator: PatternValidator = { patternId: "binary-search", variants: Object.fromEntries(variants.map((variant) => [variant, {
  "binary-search-bounds": binaryBounds,
  "midpoint-calculation": midpoint,
  "binary-search-updates": boundUpdates,
  [variant.includes("minimum") || variant.includes("maximum") ? "predicate-check" : "target-comparison"]:
    variant.includes("minimum") || variant.includes("maximum") ? predicateCheck : targetComparison,
}])) };
