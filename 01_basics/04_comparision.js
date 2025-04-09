/* Basic Comparision operatores
    console.log(2 > 1)
    console.log(2 < 1)
    console.log(2 >= 1)
    console.log(2 <= 1)
    console.log(2 == 1)
    console.log(2 != 1)
*/

// Js allowed to  compare two different data-type but this is not good practise (TS not allowed this)
// AVOID THIS BELOW LIST OF CONVERSION, THEY ARE CONFUSING.
console.log("2" > 1) 
console.log("02" > 1) 

console.log(null > 0) 
console.log(null < 0) 
console.log(null == 0) // FALSE
console.log(null >= 0)
console.log(null <= 0) //TRUE

console.log(undefined == 0)
console.log(undefined <= 0)
console.log(undefined >= 0) // ALL FALSE

//STRICT CHECK (===) => CHECK VALUE AND DATATYPE

console.log(2==="2")




