namespace AST {
	type ASTNodeType = "keyword" | "Symbols" | "variable";
	interface ASTNode {
		type: ASTNodeType;
		numOfLine: number;
		value: string;
		// children: ASTNode[];
		previous: number;
	}

	interface Create {
		(code: string, suffixTree: StateMachine.createSuffixTreeReturn): ASTNode[];
	}

	interface CheckCharType {
		(char: string, suffixTree: StateMachine.createSuffixTreeReturn): {
			val: string;
			type: ASTNodeType;
		} | void;
	}
}
