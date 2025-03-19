/* Goal is to receive an array of strings that has the userId as a number, the number of seconds
and the value sign-in or sign-out --> ["31 99 sign-out", "22 33 sign-in"]
return an array of userIds of those whose sign out time is less than or equal to 
maxSpan

I thiiink....
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
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER maxSpan
 */

function processLogs(logs, maxSpan) {
    // Write your code here

    //
    // WARNING: Please do not use GitHub Copilot, ChatGPT, or other AI assistants
    //          when solving this problem!
    //
    // We use these tools in our coding too, but in our interviews, we also don't
    // allow using these, and want to see how we do without them.
    //

    let maxSpanUsers = [];

    for(let i = 0; i < logs.length; i++) {
        let valuesToEvaluate = logs[i].split(" ");
        if(valuesToEvaluate.includes("sign-out") && parseInt(valuesToEvaluate[1] <= maxSpan)) {
            maxSpanUsers.push(valuesToEvaluate[1]);
            console.log()
        }
    }

    return maxSpanUsers;
}


function main() {
    const ws = process.stdout;

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const maxSpan = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, maxSpan);

    ws.write(result.join('\n') + '\n');

    ws.end();
}