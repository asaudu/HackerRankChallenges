/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in
the positive direction (i.e, toward positive infinity).

    The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
    The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return
YES, otherwise return NO. 
Example:
x1 = 2
v1 = 1
x2 = 1
v2 = 2

After one jump, they are both at x = 3. (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

    int x1, int v1: starting position and jump distance for kangaroo 1
    int x2, int v2: starting position and jump distance for kangaroo 2

Returns

    string: either YES or NO

Input Format

A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.
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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    /*
        create a var to hold initial difference between k1 and k2
        create a var to hold new difference between k1 and k2
        create a var for k1 end of jump
        create a var for k2 end of jump
        iterate to compare the end jump locations of kangaroo 1 and kangaroo 2
        difference equals k1 - k2
            if the initialDifference less than newDifference,
                each kangaroo end jump location increments by its "v"
                loop again
            if the distance between k1 and k2 increases
                return NO
            if the end jump location is the same
                return YES    
     */


    let differenceBeforeJump = Math.abs(x1 - x2);
    let location1 = x1;
    let location2 = x2;
    let differenceAfterJump = Math.abs(location1 - location2);
    
    if(v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }
    while (true) {
        location1 += v1;
        location2 += v2;
        differenceBeforeJump = differenceAfterJump;
        differenceAfterJump = Math.abs(location1 - location2);
      if (differenceAfterJump <= differenceBeforeJump) {
     }  
     if(location1 == location2) {
        return "YES";
     }
     if (differenceAfterJump > differenceBeforeJump) {
        return "NO"
     }
    }
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}