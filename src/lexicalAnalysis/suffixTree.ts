const createSuffixTree: StateMachine.CreateSuffixTree = (keyword) => {
	const result: StateMachine.createSuffixTreeReturn = {};

	for (let index = 1; index < keyword.length; index++) {
		const char = keyword.charAt(index);
		const previous = keyword.charAt(index - 1);
		// const next = keyword.charAt(index + 1);
		const isCharExsit = char in result;
		const isPreExsit = previous in result;
		if (isPreExsit) {
			result[previous][char] = 1;
			// console.log(result[previous], char);
		} else {
			result[previous] = { ...result[previous], [char]: 1 };
		}
		if (!isCharExsit) {
			console.log(result[previous], char);
			result[char] = {};
		}
		// if (!next) {
		// 	result[char] = { ...result[char], empty: 1 };
		// }
	}

	return result;
};

const mergeTree = (source: StateMachine.createSuffixTreeReturn, newObj: StateMachine.createSuffixTreeReturn) => {
	return {
		...source,
		...newObj,
	};
};

export const getKeywordsSuffixTree: StateMachine.GetKeywordsSuffixTree = (keywords) => {
	const result: StateMachine.createSuffixTreeReturn = {};
	return mergeTree(result, createSuffixTree(keywords));
};
