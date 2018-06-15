transformString(process.argv[2]);

function transformString(str) {
	let a = '', b = '', c = '';
	for (let i = 0; i < str.length; i++) {

		let k = str[i].toUpperCase();

		if (k.charCodeAt() === 65 ||
			k.charCodeAt() === 69 ||
			k.charCodeAt() === 73 ||
			k.charCodeAt() === 79 ||
			k.charCodeAt() === 85 ||
			k.charCodeAt() === 89) {
			a += str.charAt(i);
		} else if (k.charCodeAt() > 65 && k.charCodeAt() <= 90) {
			b += str.charAt(i);
		} else if (k.charCodeAt() >= 48 && k.charCodeAt() <= 57) {
			c += str.charAt(i);
		}
	}
	return process.stdout.write(a+' '+b+' '+c+'\n');
}
