/*
When a contiguous block of text is selected in a PDF viewer, the selection 
is highlighted with a blue rectangle. In this PDF viewer, each word is 
highlighted independently. For example:

There is a list of 26 character heights aligned by index to their letters. For
example, 'a' is at index 0 and 'z' is at index 25. There will also be a string.
Using the letter heights given, determine the area of the rectangle highlight
in mm^2 assuming all letters are 1mm wide.

Example
h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] word = ' torn'
The heights are t = 2, o = 1, r = 1 and  n = 1. The tallest letter is 2 high and there are 4 letters.
The hightlighted area will be 2 * 4 = 8mm^2 so the answer is 8.

Function Description

Complete the designerPdfViewer function in the editor below.

designerPdfViewer has the following parameter(s):

 - int h[26]: the heights of each letter
 - string word: a string

Returns

 - int: the size of the highlighted area

Input Format

The first line contains 26 space-separated integers describing the respective heights of each consecutive lowercase
English letter, ascii[a-z].
The second line contains a single word consisting of lowercase English alphabetic letters.

Constraints

 - 1 <= h[?] <= 7, where ? is an English lowercase letter.
 - word contains no more than 10 letters.
Sample Input 0

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc
Sample Output 0

9
Explanation 0

We are highlighting the word abc:

Letter heights are a = 1, b = 3, c = 1 and . The tallest letter, b, is 3mm high. The selection area for this word 
is 3 * 1mmm * 3mm = 9mm^2.

Note: Recall that the width of each character is 1mm.

Sample Input 1

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
zaba
Sample Output 1

28
Explanation 1

The tallest letter in zaba is z at 7mm. The selection area for this word is 4 x 1mm x 7mm = 28mm^2.
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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    let highestValue = 0;
    const theValueOfA = 97;
    
    for(let w = 0; w < word.length; w++) {
        if(word[w]) {
            let value = (word[w].charCodeAt(0)) - theValueOfA;
            if(h[value] > highestValue) {
              highestValue = h[value];
            }
        }
    }
    
    let highlightedArea = highestValue * word.length;
    
    return highlightedArea;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
