function fibonacciGenerator (n) {
	var arr = [];

	for (var index = 0; index < n; index++) {
		if (index === 0) {
			arr.push(index);
		} else if (index === 1) {
			if (!arr.includes(1,1)) {
				arr.push(index);
			} 
		} else {
			arr.push(arr[index - 1] + arr[index - 2]);
		}
	}

	return arr;
}

