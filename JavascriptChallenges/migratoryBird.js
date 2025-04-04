/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example
arr = [1, 1, 2, 2, 3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

    - int arr[n]: the types of birds sighted

Returns

    - int: the lowest type id of the most frequently sighted birds

Input Format

The first line contains an integer, n, the size of arr.
The second line describes arr as n space-separated integers, each a type number of the bird sighted.

Constraints
   - 5 <= n <= 2 x 10 ^ 5
   - It is guaranteed that each type is 1, 2, 3, 4, or 5.

Sample Input 0

6
1 4 4 4 5 3

Sample Output 0

4

Explanation 0

The different types of birds occur in the following frequencies:
  Type 1: 1 bird
  Type 2: 0 birds
  Type 3: 1 bird
  Type 4: 3 birds
  Type 5: 1 bird

The type number that occurs at the highest frequency is type 4, so we print 4 as our answer.

Sample Input 1
11
1 2 3 4 5 4 3 2 1 3 4

Sample Output 1

3

Explanation 1

The different types of birds occur in the following frequencies:
  Type 1: 2
  Type 2: 2
  Type 3: 3
  Type 4: 3
  Type 5: 1

Two types have a frequency of 3, and the lower of those is type 3.
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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    /*
    var to sort arr
    var for object to hold values and count
    iterate to populate the obj
    iterate to count the occurences
    compare the values to get the most frequent occurence
    return the key of the most repeated low value
    
    sortedArr[i] in elementsAndCount
    
     */
    
    let elementsAndCount = {};
    let lowestValueMostRepeats;
    let highestCount = 0;
   
    for(let i = 0; i < arr.length; i++) {
        if(elementsAndCount[arr[i]]) {
            elementsAndCount[arr[i]] ++;
        } else {
            elementsAndCount[arr[i]] = 1;
        }
        
    }
 
    for(let key in elementsAndCount) {
        let keyAsInt = parseInt(key);
        if(elementsAndCount[key] > highestCount) {
            highestCount = elementsAndCount[key]
            lowestValueMostRepeats = keyAsInt;
        }
        if(elementsAndCount[key] === highestCount && highestCount > keyAsInt) {
            lowestValueMostRepeats = keyAsInt
        }
    }

    return lowestValueMostRepeats;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}