export const keywords: StateMachine.KeywordsStr[] = ["define", "cond", "if", "let", "set"];
export const symbols: StateMachine.SymbolsStr[] = ["(", ")", ",", "+", "-", "*", "/", "%", ",", "&&", "!"];

export const keywordsMap: {
	[key in StateMachine.Keywords]: number;
} = {
	define: 1,
	cond: 1,
	if: 1,
	let: 1,
	set: 1,
};

export const symbolsMap: {
	[key in StateMachine.Symbols]: number;
} = {
	"!": 1,
	"(": 1,
	")": 1,
	"+": 1,
	"-": 1,
	"*": 1,
	"/": 1,
	",": 1,
	"&&": 1,
	"||": 1,
	"%": 1,
	"=": 1,
};

export const GLOBAL_ENV = {};
