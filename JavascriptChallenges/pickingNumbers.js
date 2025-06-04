/*
Given an array of integers, find the longest subarray where the absolute
difference between any two elements is less than or equal to 1.

Example

a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5].
The maximum length subarray has 5 elements.

Function Description

Complete the pickingNumbers function in the editor below.

pickingNumbers has the following parameter(s):
 - int a[n]: an array of integers

 Returns
- int: the length of the longest subarray that meets the criterion
Input Format

The first line contains a single integer n, the size of the array a.
The second line contains n space-separated integers, each an a[i].

Constraints
 - 2 <= n <= 100
 - 0 < a[i] < 100
 - The answer will be >= 2

Sample Input 0

6
4 6 5 3 3 1
Sample Output 0

3
Explanation 0

We choose the following multiset of integers from the array: {4, 3, 3}.
Each pair in the multiset has an absolute difference <= 1
(i.e., |4 - 3| = 1 and |3 - 3| = 0), so we print the number of chosen integers,
3, as our answer.

Sample Input 1

6
1 2 2 3 1 2

Sample Output 1

5
Explanation 1

We choose the following multiset of integers from the array:
{1, 2, 2, 1, 2}. Each pair in the multiset has an absolute 
difference <= 1 (i.e. |1 - 2| = 1, |1 -1| = 0, and |2 -2| = 0),
so we print the number of chosen integers, 5, as our answer.
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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let maxCount = 0;
    let sortedA = a.sort((a, b) => a - b);

    for (let i = 0; i < sortedA.length; i++) {
        let count = 0;

        for (let j = 0; j < sortedA.length; j++) {
            if (Math.abs(sortedA[i] - sortedA[j]) <= 1) {
                if (sortedA[j] === sortedA[i] || sortedA[j] === sortedA[i] + 1) {
                    count++;
                }
            }
        }

        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}