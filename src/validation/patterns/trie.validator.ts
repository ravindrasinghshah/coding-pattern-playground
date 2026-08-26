import ts from "typescript";
import { hasMethodCall, hasNewExpression, patternBinaries, patternLoops, patternNodes } from "../ast/nestedFunctionQueries";
import type { PatternValidator, RuleValidator } from "../types";

const trieRoot: RuleValidator = (context) => hasNewExpression(context, "Map") && patternNodes(context).some((node) =>
  ts.isVariableDeclaration(node) && /children/.test(node.getText()));
const nestedCharacterLoop: RuleValidator = (context) => patternLoops(context).some((outer) =>
  patternLoops(context).some((inner) => inner !== outer && inner.pos >= outer.pos && inner.end <= outer.end));
const trieChildInsert: RuleValidator = (context) => hasMethodCall(context, "has") && hasMethodCall(context, "set") && hasNewExpression(context, "Map");
const trieCursorAdvance: RuleValidator = (context) => patternBinaries(context).some((node) =>
  node.operatorToken.kind === ts.SyntaxKind.EqualsToken && /\.children\.get\(/.test(node.right.getText()));

export const trieValidator: PatternValidator = { patternId: "trie", variants: {
  "trie-build": { "trie-root": trieRoot, "nested-character-loop": nestedCharacterLoop, "trie-child-insert": trieChildInsert, "trie-cursor-advance": trieCursorAdvance },
} };
