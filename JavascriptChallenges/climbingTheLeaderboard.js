/*
An arcade game player wants to climb to the top of the leaderboard and track their
ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next
player(s) receive the immediately following ranking number.
Example
ranked = [100, 90, 90, 80]
player = [70, 80, 105]

The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's
scores are 70, 80 and 105, their rankings after each game are 4th, 3rd and 1st.
Return [4, 3, 1].
Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

int ranked[n]: the leaderboard scores
int player[m]: the player's scores
Returns

int[m]: the player's rank after each new score
Input Format

The first line contains an integer n, the number of players on the leaderboard.

The next line contains n space-separated integers ranked[i], the leaderboard
scores in decreasing order.
The next line contains an integer, m, the number games the player plays.
The last line contains m space-separated integers player[j], the game scores.

Constraints
 - 1 <= n <= 2 x 10^5
 - 1 <= m <= 2 x 10^5
 - 0 <= ranked[i] <= 10^9 for 0 <= i < n
 - 1 <= player[j] <= 10^9 for 0 <= j < m
 - The existing leaderboard, ranked, is in descending order.
 - The player's scores, player, are in ascending order.
 Subtask

For 60% of the maximum score:
 - 1 <= n <= 200
 - 1 <= m <= 200

 Sample Input 1

CopyDownload
Array: ranked
100
100
50
40
40
20
10

 



Array: player
5
25
50
120

 
7
100 100 50 40 40 20 10
4
5 25 50 120
Sample Output 1

6
4
2
1
Explanation 1

Alice starts playing with  players already on the leaderboard,
which looks like this:
looks like this:

image

After Alice finishes game , her score is  and her ranking is :

image

After Alice finishes game , her score is  and her ranking is :

image

After Alice finishes game , her score is  and her ranking is tied with Caroline at :

image

After Alice finishes game , her score is  and her ranking is :

image
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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let uniqueRanked = [];
    for (let u = 0; u < ranked.length; u++) {
    if (ranked[u] !== ranked[u + 1]) {
        uniqueRanked.push(ranked[u]);
        }
    }

    let playerRanks = [];
    let i = uniqueRanked.length - 1;

    for(let p = 0; p < player.length; p++) {

        while (i >= 0 && player[p] >= uniqueRanked[i]) {
            i--;
        }

        playerRanks.push(i + 2);
    }
    return playerRanks;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}