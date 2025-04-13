// => For learning JS must learn Object
// => Two ways to declare object 1.way of literal 2. way of constructor
// => Singleton - Not made in literals only in constructor always

// 2. => Object Constructor :

    // Declare object methods ->
    // Object.create

// 1. => Object Literals    :
    // Declare object methods ->

    const mySym = Symbol("key1")

    const js_user = {
        name : "MAYUR",
        [mySym]: "Mykey1",
        "full name" : "MAYUR BAMBALE",     // => not accessed by .
        age : 18,
        location: "sangli",
        email: "myname@gmail.com",
        isLoggedIn : false,
        lastLoginday: ["Monday", "Saturday"]
    }    
/*
    // Access Objects
    console.log(js_user.name)           //=> But this is old way
    console.log(js_user["name"])
    console.log(js_user["full name"])   // => Useful for this full name type of declarations.

    // Before using [] bracket
    console.log(js_user.mySym)  
    console.log(typeof (js_user.mySym)) // => Return type as String, we have symbol. hence in above return as []

    // After using [] brakcet
    console.log(js_user[mySym])  
    console.log(typeof js_user[mySym])
*/


    js_user.email = "myname@chatgpt.com"    // => Change default value
    // console.log(js_user["email"])

    // Object.freeze(js_user)                  // => js_user object is lock after that we can't change the values
    
    js_user.email = "myname@gmail.com"
    // console.log(js_user)           // => Value of email is not changed. 

    js_user.greeting = function(){
        console.log("Hello JS User")
    }

    js_user.greeting2 = function(){
        console.log(`Hello JS User, ${this.name}`)    // => ` ` -> String interpulation. This -> used for referencing same object
    }

    console.log(js_user.greeting())  // => Error given when object is freeze.
    console.log(js_user.greeting2())