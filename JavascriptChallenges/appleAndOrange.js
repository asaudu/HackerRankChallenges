/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

    The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right. 
    Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
    When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis
    *A negative value of means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *
    Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?
    For example, Sam's house is between s=7 and t=10. The apple tree is located at a=4 and the orange at b=12. There are m=3 apples and n=3 oranges. Apples are thrown apples= [2,3,-4] units distance from a,
     and oranges = [3,-2,-2] units distance. Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6,7,0]. Oranges land at [12 + 3, 12 + -2, 12 + -4] = [15,10,8].
     One apple and two oranges land in the inclusive range 7 - 10 so we print
     1
     2
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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here;
    let newApplesArr = iterateAndAdd(apples, a);
    let newOrangesArr = iterateAndAdd(oranges, b);
    
    let appleCount = getCount(newApplesArr, s, t);
    let orangeCount = getCount(newOrangesArr, s, t);
    
    console.log(appleCount + '\n' + orangeCount);
}

function iterateAndAdd(arr, location) {
    let updatedValues = [];
    for(let i =0; i < arr.length; i++) {
        updatedValues.push(location + arr[i]);
    }
    return updatedValues;
}

function getCount(arr, startLocation, endLocation) {
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === startLocation) {
            count += 1;
        }
        if(arr[i] > startLocation && arr[i] <= endLocation) {
            count += 1;
        }
        if(arr[i] < startLocation || arr[i] > endLocation) {
            count += 0;
        }
    }
    
    return count;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}