 //1. create an object for animal, car
 
 let animal = {
    name:"Lion",
    skin:"brown",
    age:40,
    sound : "roars"
};

const car = {
    name :'Mustang',
    company:"Ford",
    year: 1969,
    skin:"black"
};

console.log(car.name)
console.log(car.skin,"\n")

// 2. . find the duplicate in a string() (use array)- optional
const str = "programming";

const arrayofstr = str.split('');

console.log("\nstring in array:-",arrayofstr)

const duplicate = []

arrayofstr.forEach(ele1 => {
    if(arrayofstr.indexOf(ele1) !== arrayofstr.lastIndexOf(ele1) && !duplicate.includes(ele1)){

        duplicate.push(ele1)
    }

});

console.log("\nduplicate elements in string",duplicate)


// 3.reverse the string

console.log("\n\ngiven string:-",str)
let reversed = str.split('').reverse().join('');

console.log("\nReversed string:-", reversed);


//5.sorting array
let arr = [19,13,24,55,0,2,40]
console.log("\ngiven array:-",arr)
console.log("\nsorting the array in ascending order:-",arr.sort( (a,b) => a-b)) 

//4.find the highest and lowest value in array

console.log("Highest value in array:-",Math.max(...arr))
console.log("Lowest value in array:-",Math.min(...arr))

const array = [11,12,13,14,17,18,19];
console.log("\nArray:-",array)

array.splice(4,1,15,16)

console.log("\nRemove 4th index element and add two element:-",array)
  
