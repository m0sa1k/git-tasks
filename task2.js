let number = process.argv[2];

function fibonacci(num) {
	if (num <= 1) {
		return num;
	} else {
		let a = 1,
			b = 1;
		for (let i = 3; i <= num; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b;
	}
}

if ( !isNaN(Number(number)) ) {
	process.stdout.write(fibonacci(Number(number))+'\n');
}

