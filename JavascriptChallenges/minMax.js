/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
Example
The minimum sum is  and the maximum sum is . The function prints
16 24
Function Description
Complete the miniMaxSum function in the editor below.
miniMaxSum has the following parameter(s):
arr: an array of  integers
Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
Input Format
A single line of five space-separated integers.
Constraints
Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
Sample Input
1 2 3 4 5
Sample Output
10 14
Explanation
The numbers are , , , , and . Calculate the following sums using four of the five integers:
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    //declare a var to hold maxSum
    //declare a var to hold minSum
    //declare a var to sort arr
    //iterate over the array
    //use a condition to add the values to minSum
    //use a condition to add the values to maxSum
    
    let minSum = 0;
    let maxSum = 0;
    let sortedArr = arr.sort((a,b) => a - b);
    for(let i = 0; i < sortedArr.length; i++) {
        if(i != sortedArr.length - 1) {
            minSum += sortedArr[i];
        }
        if(i > 0) {
            maxSum += sortedArr[i];
        }
    }

    console.log(minSum + " " + maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}