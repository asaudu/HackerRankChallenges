/*
Tudor is sitting in math class, on his laptop. Clearly, he is not paying attention in this situation. However, he gets called on by his math teacher to do some problems. Since his math teacher did not expect much from Tudor, he only needs to do some simple addition problems. However, simple for you and I may not be simple for Tudor, so please help him!
Input Specification

The first line will contain an integer
(), the number of addition problems Tudor needs to do. The next lines will each contain two space-separated integers whose absolute value is less than

, the two integers Tudor needs to add.
Output Specification

Output

lines of one integer each, the solutions to the addition problems in order.
Sample Input
2
1 1
-1 0

Sample Output
2
-1
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
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //
    
    let total = [];
    for(let i = 0; i < lines.length; i++) {
        let valuesToConvert = lines[i].split(" ");
        total.push(parseInt(valuesToConvert[0]) + parseInt(valuesToConvert[1]));
    }


    return total;
}

function main() {
    const ws = process.stdout;

    const linesCount = parseInt(readLine().trim(), 10);

    let lines = [];

    for (let i = 0; i < linesCount; i++) {
        const line = readLine();
        lines.push(line);
    }

    const result = aPlusB(lines);

    ws.write(result.join('\n') + '\n');

    ws.end();
}