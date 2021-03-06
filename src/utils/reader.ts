import * as fs from "fs";
import * as readline from "readline";
export async function processLineByLine(path: string) {
	const fileStream = fs.createReadStream(path);
	const lines: string[] = [];
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});
	// Note: we use the crlfDelay option to recognize all instances of CR LF
	// ('\r\n') in input.txt as a single line break.

	for await (const line of rl) {
		// Each line in input.txt will be successively available here as `line`.
		lines.push(line);
	}
	return lines;
}
