let number = process.argv[2];

function fibonacci(num) {
	if (num === 0 || num === 1) {
		process.stdout.write(num+'\n');
	} else if (num < 0) {
		process.stdout.write('0\n');
	} else {
		let arr = [0, 1];
		for (let i = 1; i < num; i++) {
			arr.push(arr[arr.length-1]+arr[arr.length-2]);
		}
		process.stdout.write(arr[arr.length-1]+'\n');
	}
}

if ( !isNaN(Number(number)) ) {
	fibonacci(Number(number));
}

