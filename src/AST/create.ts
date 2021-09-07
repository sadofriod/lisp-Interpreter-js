import { symbolsMap, keywords } from "../constant";

let charCache: string = "";
let isKeyword = NaN;

const checkCharType: AST.CheckCharType = (char, suffixTree) => {
	const isSymbol = char in symbolsMap || char === " ";
	if (char === " " && !charCache) {
		isKeyword = NaN;
		return;
	}

	if (isSymbol) {
		const result: ReturnType<AST.CheckCharType> = {
			val: charCache,
			type: isKeyword === 1 ? "keyword" : "variable",
		};
		isKeyword = NaN;
		charCache = "";
		return result;
	}
	const cacheLen = charCache.length;
	const previousChar = charCache.charAt(cacheLen - 1);
	const previousSuffixTree = suffixTree[previousChar];
	const isBelongToKeyword = previousSuffixTree && char in previousSuffixTree;
	// console.log(previousSuffixTree);

	charCache += char;
	if (!isBelongToKeyword) {
		isKeyword = 0;
	}

	if (isBelongToKeyword && isNaN(isKeyword)) {
		isKeyword = 1;
	}
	return;
};

export const create: AST.Create = (code, suffixTree) => {
	const result: AST.ASTNode[] = [];
	let previous = 0;
	console.log(suffixTree);

	const setResult = (nodeType: AST.ASTNode["type"], value: AST.ASTNode["value"]) => {
		const resultItem = {
			type: nodeType,
			value,
			numOfLine: 1,
			previous,
		};
		value && result.push(resultItem);
	};

	for (let index = 0; index < code.length; index++) {
		const char = code.charAt(index);
		const isSymbol = char in symbolsMap || char === " ";

		const word = checkCharType(char, suffixTree);
		// const
		if (isSymbol && word) {
			const { val, type } = word;
			if (char === "(") {
				previous += 1;
			}
			if (char === ")") {
				previous -= 1;
			}
			if (!(char in keywords)) {
				char && setResult(type, val);
			} else {
				char && setResult(type, val);
			}
		}
	}
	return result;
};
