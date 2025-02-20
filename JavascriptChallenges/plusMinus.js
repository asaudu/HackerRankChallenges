/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
Example
There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
0.400000
0.400000
0.200000
Function Description
Complete the plusMinus function in the editor below.
plusMinus has the following parameter(s):
int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.
Input Format
The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .
Constraints
Output Format
Print the following  lines, each to  decimals:
proportion of positive values
proportion of negative values
proportion of zeros
Sample Input
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output
0.500000
0.333333
0.166667
Explanation
There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .
*/

//Solution
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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    /*
    declare variables for number of zeros, negative number count and positive number count
    
    loop through the array in order to increment the counts as necessary
    
    maybe declare variables that also hold each ratio
    get each ratio to the 6th decimal place
    print the ratios with a line break between each ratio
     */

    let zeros = 0;
    let positives = 0;
    let negatives = 0;
    let length = arr.length;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            negatives += 1;
        }
        if(arr[i] === 0) {
            zeros += 1;
        }
        if(arr[i] > 0) {
            positives += 1;
        }
    }
    
    let zerosRatio = zeros/length;
    let positivesRatio = positives/length;
    let negativesRatio = negatives/length;
    
    console.log( positivesRatio.toFixed(6) + "\n" + negativesRatio.toFixed(6) + "\n" + zerosRatio.toFixed(6));
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}