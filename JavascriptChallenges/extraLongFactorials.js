/*
The factorial of the integer , written , is defined as:
n! = n x (n - 1) x (n - 20 x ... x 3 x 2 x 1
Calculate and print the factorial of a given integer.
For example, if n = 30, we calculate
30 x 29 x 28 x .... x 2 x 1 and get 265252859812191058636308480000000.
Function Description
Complete the extraLongFactorials function in the editor below. It should print the result and return.
extraLongFactorials has the following parameter(s):
n: an integer
Note: Factorials of n > 20 can't be stored even in a 64-bit long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.
We recommend solving this challenge using BigIntegers.
Input Format
Input consists of a single integer n
Constraints
1 <= n <= 100
Output Format
Print the factorial of n.
Sample Input
25
SamplenOutput
15511210043330985984000000
25! = 25 x 24 x 23 x ... x 3 x 2 x 1
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    /*
    var to hold sum
    iterate n times and multiply the value into sum
     */
    let factorial = 1n;
    
    for(let i = 1n; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial.toString());
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}