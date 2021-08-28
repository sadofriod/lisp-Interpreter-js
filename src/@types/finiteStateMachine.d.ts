namespace StateMachine {
	enum Keywords {
		define = "define",
		let = "let",
		if = "if",
		cond = "cond",
		set = "set",
	}

	enum Symbols {
		blockStart = "(",
		blockEnd = ")",
		split = ",",
		plus = "+",
		substrate = "-",
		Multiply = "*",
		divide = "/",
		equal = "=",
		mod = "%",
		or = "||",
		and = "&&",
		not = "!",
	}

	enum StateSet {
		error = "error",
		valid = "valid",
		end = "end",
	}

	type KeywordsStr = "define" | "cond" | "if" | "let" | "set";
	type SymbolsStr = "(" | ")" | "," | "+" | "-" | "*" | "/" | "%" | "||" | "&&" | "!";

	interface createSuffixTreeReturn {
		[key: string]: {
			[char: string]: number;
		};
	}
	interface CreateSuffixTree {
		(keywords: KeywordsStr): createSuffixTreeReturn;
	}

	interface GetKeywordsSuffixTree {
		(keywords: KeywordsStr[]): createSuffixTreeReturn;
	}
}
