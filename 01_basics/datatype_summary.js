/*Types of data-type
    1. Primitive dataType (they are call by value) => 7 Types
        string
        number
        boolean
        null
        undefined
        symbol
        bigint

    2. Non-primitive dataType (reference data type)
        Array
        Objects
        Functions
*/

// Examples =>
    const id = Symbol("123")
    const anotherId = Symbol("123")

    console.log(id === anotherId)

    const bigInt = 654321654654163n    // add n at end then it become bigInt dataType
    console.log(typeof bigInt)

// Reference dataType
    //Array
    const names = ["science", "maths", "biology"]
    console.log(names)

    //Objects => In key value pair
    let myObj = {
        name:"Jofn",
        age:22,
        id:22,
    }
    console.log(myObj)

    //Function
    const myFunction = function(){
        console.log("Hello World!")
    }
   
