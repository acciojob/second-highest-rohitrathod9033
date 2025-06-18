function secondHighest(arr) {
	arr = arr.map(Number);
	let max = -Infinity, second = -Infinity;
	for (let num of arr) {
		if (num > max) {
			second = max;
			max = num;
		} else if (num > second && num < max) {
			second = num;
		}
	}
	return second === -Infinity ? -Infinity : second;
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
