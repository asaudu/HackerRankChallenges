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