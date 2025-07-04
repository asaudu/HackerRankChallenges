/*
We define a magic square to be an n X n matrix of distinct positive integers from 1 to n^2 where
the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a 3 X 3 matrix of s integers in the inclusive range [1, 9]. We can convert any digit a to any
other digit b in the range [1, 9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost.
Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9].

Example

$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:

5 3 4
1 5 8
6 4 2

We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2

This took three replacements at a cost of
|5 -8| + |8 - 9| + |4 - 7| = 7.
Funtional Description

Complete the formingMagicSquare function in the editor below.

formingMagicSquare has the following parameter(s):

   - int s[3][3]: a 3 X 3 array of integers

Returns

   - int: the minimal total cost of converting the input square to a magic square

Input Format
Each of the lines contains three space-separated integers of row s[i].

Constraints

  - s[i][j]  [1, 9]

Sample Input 0

4 9 2
3 5 7
8 1 5

Sample Output 0

1

Explanation 0

If we change the bottom right value, s[2][2], from 5 to 6 at a cost of |6 - 5| = 1, s becomes
a magic square at the minimum possible cost.

Sample Input 1

4 8 2
4 5 7
6 1 6

Sample Output 1

4

Explanation 1

Using 0-based indexing, if we make

    - s[0][1] -> 9 at a cost of |9 - 8| = 1
    - s[1][0] -> 3 at a cost of |3 - 4| = 1
    - s[2][0] -> 8 at a cost of |8 -6| = 2,

then the total cost will be 1 + 1 + 2 = 4. 
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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    /*
    have 3 variables to hold the sum of each row
    have a var to hold the cost
    iterate over each row to get the sum (could be a point to optimize at)
    compare the values
    add the value it would take to get each sum to 15,
    to cost
    return cost
     */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}