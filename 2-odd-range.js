/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/


function oddRange(end) {
    results = [];
    for (let i = 1; i <= end; i = i+2){
        results.push[i];
        }
    return results
}
console.log(oddRange(100));
