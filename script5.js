/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (use break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array. */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);
let index = people.indexOf("Dani");
people.splice(index,1);
console.log(people);
index = people.indexOf("Juan");
people.splice(index,1);
console.log(people);
[people[0],people[1]]=[people[1],people[0]];
console.log(people);
people.push(`José`);
console.log(people);
for (index of people){
    console.log(index);
    if( index === "Maria" ){
        break;
    }
}
console.log(people.indexOf("Maria"));



