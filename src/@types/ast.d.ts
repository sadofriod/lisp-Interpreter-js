namespace AST {
	interface ASTNode {
		type: string;
		numOfLine: number;
		value: string;
		children: ASTNode[];
	}
}
