/* Create a function that sort with the bubble method.
Input [3, 6, 12, 5, 100, 1 ]
output [1, 3, 5, 6, 12, 100] */

let input = [3, 6, 12, 5, 100, 1 ];

const bubbleMethod = arr => {
    let swapped = 1;
    while (swapped) {
        swapped = 0;
        for (let index = 0; index < arr.length; index++) {
            if(arr[ index ] > arr[ index + 1 ]){
                swapped = 1;
                [arr[ index ],arr[ index + 1 ]]=[arr[ index + 1 ],arr[ index ]];
            }
        }
    }
    return arr;
};

console.log(bubbleMethod(input));