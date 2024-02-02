// fizzbuzz.ts
function fizzBuzz(n: number) {
    var result = ''
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i.toString();
        }

        if (i < n) {
            result += ',';
        }
    }
    return result;
}

const n = 15;
console.log(fizzBuzz(15));
