/* Exercise #4 (suggested filter() and includes() )

Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const printEqualStringsOfTwoArrays = (arr1, arr2) => {
    for (let index = 0; index < array1.length; index++) {
        for (let j = 0; j < arr2.length; j++) {
            if( arr1[ index ] === arr2[ j ]){
                console.log(`The element "${arr2[ j ]}" is repeated`);
            }
            
        }  
    }
};

printEqualStringsOfTwoArrays( student1Courses, student2Courses );