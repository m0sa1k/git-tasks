transformString(process.argv[2]);

function transformString(str) {
	let array1 = [];
	let array2 = [];
	let array3 = [];
	let mainArray = [];

	for (let i = 0; i < str.length; i++) {
		if (vowelsRange(str[i])) {
			array1.push(str.charAt(i));
		} else if (consonantsRange(str[i])) {
			array2.push(str.charAt(i));
		} else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
			array3.push(str.charAt(i));
		}
	}

	mainArray.push(array1.join(''));
	mainArray.push(array2.join(''));
	mainArray.push(array3.join(''));
	
	console.log(mainArray.join(' '));
}

function vowelsRange(letter) {
	if (letter.charCodeAt() === 65 ||
		letter.charCodeAt() === 69 ||
		letter.charCodeAt() === 73 ||
		letter.charCodeAt() === 74 ||
		letter.charCodeAt() === 79 ||
		letter.charCodeAt() === 85 ||
		letter.charCodeAt() === 89 ||
		letter.charCodeAt() === 97 ||
		letter.charCodeAt() === 101 ||
		letter.charCodeAt() === 105 ||
		letter.charCodeAt() === 106 ||
		letter.charCodeAt() === 111 ||
		letter.charCodeAt() === 117 ||
		letter.charCodeAt() === 121) {
		return true;
	} else return false;
}

function consonantsRange(letter) {
	if ( letter.charCodeAt() > 65 && letter.charCodeAt() <= 90 || 
		 letter.charCodeAt() > 97 && letter.charCodeAt() <= 122 && 
		 !vowelsRange(letter)) {
		return true;
	} else return false;
}
