function secondHighest(arr) {
	arr = arr.map(Number); // Convert strings to numbers

	let max = -Infinity;
	let second = -Infinity;

	for (let num of arr) {
		if (num > max) {
			second = max;
			max = num;
		} else if (num < max && num > second) {
			second = num;
		}
	}

	return second;
}

function Main() {
	var n = prompt("Enter the number of elements");
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr[i] = prompt("Enter element " + (i+1));
	}
	alert(secondHighest(arr));
}
Main();