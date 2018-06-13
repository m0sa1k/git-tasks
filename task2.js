let number = process.argv[2];

function fibonacci(n) {
	if (n < 0) {
		return fibonacci(n + 2) - fibonacci(n + 1);
	} else {
		return (n == 0 || n == 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
	}
}

process.stdout.write(fibonacci(Number(number))+'\n');