import { create as createAST } from "AST/create";
import { getKeywordsSuffixTree } from "lexicalAnalysis/suffixTree";
import { processLineByLine } from "utils/reader";
processLineByLine(__dirname + "/__test__/case1.lsp");
