let string = process.argv[2];

function transformString(string) {

	let newstring = '';

	let vowels = string.match(/[aeijouyAEIJOUY]/g);
	if (vowels !== null) {
		newstring += vowels.join('') + ' ';
	}

	let consonants = string.match(/[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ]/g);
	if (consonants !== null) {
		newstring += consonants.join('') + ' ';
	}

	let numbers = string.match(/[0-9]/g);
	if (numbers !== null) {
		newstring += numbers.join('') + ' ';
	}

	return newstring;
}

process.stdout.write(transformString(string)+'\n');
