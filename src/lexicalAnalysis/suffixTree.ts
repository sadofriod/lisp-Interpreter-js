const createSuffixTree: StateMachine.CreateSuffixTree = (keyword) => {
	const result: StateMachine.createSuffixTreeReturn = {};

	for (let index = 1; index < keywords.length; index++) {
		const char = keyword.charAt(index);
		const previous = keyword.charAt(index - 1);
		const isCharExsit = char in result;
		const isPreExsit = previous in result;
		if (isPreExsit) {
			result[previous][char] = 1;
		} else {
			result[previous] = { [char]: 1 };
		}
		if (!isCharExsit) {
			result[char] = {};
		}
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
	for (const keyword of keywords) {
		mergeTree(result, createSuffixTree(keyword));
	}
	return result;
};
