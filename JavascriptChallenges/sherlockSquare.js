/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value
that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number
of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.
Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.

Function Description

Complete the squares function in the editor below. It should return an integer representing the number
of square integers in the inclusive range from a to b.
squares has the following parameter(s):

   - int a: the lower range boundary
   - int b: the upper range boundary

Returns

   - int: the number of square integers in the range

Input Format

The first line contains q, the number of test cases.
Each of the next q lines contains two space-separated integers, a and b, the starting and ending integers
in the ranges.

Sample Input
2
3 9
17 24

Sample Output

2
0
Explanation

Test Case #00: In range [3, 9], 4 and 9 are the two square integers.
Test Case #01: In range [17, 24], there are no square integers. 
*/

'use strict';

const fs = require('fs');

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
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
    // Write your code here
    /*
    looking for values that are the result of a square
    [3, 9] = 3, 4, 5, 6, 7, 8, 9
    a var to be the counter to return
    a loop starting at a and ending at b
    with each iteration find the square root of the value at i
    if the value has no remainder, increment the counter
    return the counter

    after some tinkering, realized I could also do
    let squareRootA = Math.ceil(Math.sqrt(a));
    let squareRootB = Math.floor(Math.sqrt(b));
    let counter = squareRootB - squareRootA + 1;
    return counter;
     */
    
    let counter = 0;
    
    for(let i = 1; i * i <= b; i++) {
        if(i * i >= a) {
            counter++;
        }
    }
    
    return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const a = parseInt(firstMultipleInput[0], 10);

        const b = parseInt(firstMultipleInput[1], 10);

        const result = squares(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}