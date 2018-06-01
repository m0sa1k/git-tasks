let string = process.argv[2];

function stringToLettersArray(string) {
	let array = [];

	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
			array.push(string.charAt(i));
		}
	}

	return array;
}


function checkSameLetters(array) {
	for (var i = 0; i < (array.length-1)/2; i++) {
		if (array[i].charCodeAt() !== array[array.length-1-i].charCodeAt()) {
			return process.stdout.write('NO\n');
		}
	}

	return process.stdout.write('YES\n');
}


function palindrome(str) {
	let arr = stringToLettersArray(str.toUpperCase());
	checkSameLetters(arr);
}


palindrome(string);


//newstr.charCodeAt(i) > 1039 && newstr.charCodeAt(i) < 1072