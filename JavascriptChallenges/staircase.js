/*
Staircase detail
This is a staircase of size :
   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size .
Function Description
Complete the staircase function in the editor below.
staircase has the following parameter(s):
int n: an integer
Print
Print a staircase as described above.
Input Format
A single integer, , denoting the size of the staircase.
Constraints
 .
Output Format
Print a staircase of size  using # symbols and spaces.
Note: The last line must have  spaces in it.
Sample Input
6 
Sample Output
     #
    ##
   ###
  ####
 #####
######
Explanation
The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    //expected output is a pyramid of #'s AND spaces, with the last row having no spaces
    //declare a variable to hold the #
    //maybe a variable to hold the spaces
    //loop can be used to print
    //conditional statement to handle spaces. look up function for leading spaces
    //leading spaces minus 1 of i
    //print to console
    let hashes = "";
    
    for(let i = 1; i <= n; i++) {
        hashes += "#";
        console.log(hashes.padStart(n, ' '));
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}