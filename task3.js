transformString(process.argv[2]);

function transformString(str) {
	let vowelsString = '', consonantsString = '', numbersString = '';
	let mainString = '';

	for (let i = 0; i < str.length; i++) {

		let k = str[i].toUpperCase();

		if (k.charCodeAt() === 65 ||
			k.charCodeAt() === 69 ||
			k.charCodeAt() === 73 ||
			k.charCodeAt() === 74 ||
			k.charCodeAt() === 79 ||
			k.charCodeAt() === 85 ||
			k.charCodeAt() === 89) {
			vowelsString += str.charAt(i);
		} else if (k.charCodeAt() > 65 && k.charCodeAt() <= 90) {
			consonantsString += str.charAt(i);
		} else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
			numbersString += str.charAt(i);
		}
	}

	mainString = outputLine(vowelsString) + outputLine(consonantsString) + outputLine(numbersString);
	process.stdout.write(mainString+'\n');
}

function outputLine(str) {
	if (str != '') {
		return str += ' ';
	} else return str;
}