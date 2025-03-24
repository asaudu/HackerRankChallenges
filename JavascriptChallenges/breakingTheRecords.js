/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:
                                  Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

   - int scores[n]: points scored per game
Returns

   - int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records,
   and index 1 is for breaking least points records.

Input Format
The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective
values of score0, score1, ... , score n - 1.
Constraints
  - 1 <= n <= 1000
  - 0 <= scores[i] <= 10 ^ 8
  
Sample Input O
  9
  10 5 20 20 4 5 2 25 1
Sample Output O
  24
Explanation O
The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

image
She broke her best record twice (after games 2 and 7) and her worst record four times (after games 1, 4, 6, and 8), so we print 2 4 as our answer.
Note that she did not break her record for best score during game 3, as her score during that game was not strictly greater than her best record at the time.

Sample Input 1
    10
    3 4 21 36 10 28 35 5 24 42
Sample Output 1
    40
Explanation 1
The diagram below depicts the number of times Maria broke her best and worst records throughout the season:
image
She broke her best record four times (after games 1, 2, 3, and 9) and her worst record zero times (no score during the season was
lower than the one she earned during her first game), so we print 4 0 as our answer.
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}