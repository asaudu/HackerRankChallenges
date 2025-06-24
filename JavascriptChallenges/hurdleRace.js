/*
A video player plays a game in which the character competes in a hurdle race.
Hurdles are of varying heights, and the characters have a maximum height they
can jump. There is a magic potion they can take that will increase their maximum
jump height by 1 unit for each dose. How many doses of the potion must the character
take to be able to jump all of the hurdles. If the character can already clear
all of the hurdles, return 0.

Example
height = [1, 2, 3, 3, 2]
k = 1

The character can jump  unit high initially and must take 3 - 1 = 2 doses of potion to
be able to jump all of the hurdles.

Function Description

Complete the hurdleRace function in the editor below.

hurdleRace has the following parameter(s):

 - int k: the height the character can jump naturally
 - int height[n]: the heights of each hurdle
Returns

 - int: the minimum number of doses required, always  or more

Input Format

The first line contains two space-separated integers n and k, the number of hurdles and the
maximum height the character can jump naturally.
The second line contains n space-separated integers height[i] where 0 <= i < n.

Constraints
 - 1 <= n, k <= 100
 - 1 <= height[i] <= 100

Sample Input O

5 4
1 6 3 5 2

Sample Output O
2

Explanation O
Dan's character can jump a maximum of k = 4 units, but the tallest hurdle has a height of h1 = 6:
To be able to jump all the hurdles, Dan must drink 6 - 4 = 2 doses.

Sample Input 1

5 7
2 5 4 5 2
Sample Output 1

0
Explanation 1

Dan's character can jump a maximum of k = 7 units, which is enough to cross all the hurdles:

Because he can already jump all the hurdles, Dan needs to drink 0 doses.
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
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    let doses = 0;
    
    for(let i = 0; i < height.length; i++) {
        if(height[i] > k) {
            let difference = height[i] - k;
            k += difference;
            doses += difference
        }
        
        if(height[i] === k || height[i] < k) {
            k += 0;
            doses += 0;
        }
    }

    return doses;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const height = readLine().replace(/\s+$/g, '').split(' ').map(heightTemp => parseInt(heightTemp, 10));

    const result = hurdleRace(k, height);

    ws.write(result + '\n');

    ws.end();
}

