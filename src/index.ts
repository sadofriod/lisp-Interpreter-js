import { create as createAST } from "./AST/create";
import { getKeywordsSuffixTree } from "./lexicalAnalysis/suffixTree";
import { processLineByLine } from "./utils/reader";
import { keywords } from "./constant";

const main = async () => {
	const lines = await processLineByLine(__dirname + "/__test__/case1.lsp");

	const keywordsSuffixTree = keywords.reduce((prev, curr) => {
		return {
			...prev,
			...getKeywordsSuffixTree(curr),
		};
	}, {});

	console.log(keywordsSuffixTree);

	for (const line of lines) {
		// console.log(createAST(line, getKeywordsSuffixTree(line as any)));
		// console.log(getKeywordsSuffixTree(line as any));
	}
};

main();
