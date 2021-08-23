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
		listStart = "[",
		listEnd = "]",
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
}
