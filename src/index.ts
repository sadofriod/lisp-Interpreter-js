import { create as createAST } from "./AST/create";
import { getKeywordsSuffixTree } from "./lexicalAnalysis/suffixTree";
import { processLineByLine } from "./utils/reader";

const main = async () => {
	const lines = await processLineByLine(__dirname + "/__test__/case1.lsp");
	for (const line of lines) {
		console.log(createAST(line, getKeywordsSuffixTree(line as any)));
		// console.log(getKeywordsSuffixTree(line as any));
	}
};

main();
