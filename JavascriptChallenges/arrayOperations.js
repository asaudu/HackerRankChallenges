//Find a number in an array and return the index
function a(arr, num){
    //iterate over the array
    //if the number at i equals num return i
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
}

//Add an item to an array at specific index and return new array (splice)
function b(arr, item, index) {
    //create a variable that holds the sliced array up until the desired index
    //copy item into that new variable
    //then copy the remainder of the initial array
    //return new array

    let newHotness = arr.slice(0,index);
    newHotness.push(item);
    let endHotness = arr.slice(index + 1);
    let finalArr = [...newHotness, ...endHotness];

    return finalArr;

}