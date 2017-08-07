var fizzBuzz = function(num) {
	var i = 1;
	var arr = [];
	while (i <= num) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push("FIZZBUZZ");
		} else if (i % 5 === 0) {
			arr.push("BUZZ");
		} else if (i % 3 === 0) {
			arr.push("FIZZ");
		}
		else {
			arr.push(i);
		}
		i++;
	}
	window.alert(arr);
}
fizzBuzz(50);