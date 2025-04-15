/*   
    // const userEmail ="mayur@google.com"
    const userEmail = undefined


    if(userEmail){
        console.log("Got user email")
    }
    else{
        console.log("Don't have user email")
    }
*/

/*
    Falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
    Truthy values => true, "0", 'false', "false", " ", [], {}, function(){}}  ->(else of falsy values)
*/

// const userE = []
// if(userE.length === 0){
//     console.log("Array is Empty")
// }


// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("Object is empty");
    
// }


// => Nullish Coalescing Operator (??) : null undefind *******************
/*
    let val1
    val1 = 5 ?? 10 
    console.log(val1)

    val1 = undefined ?? 15
    console.log(val1)

    val1 = null ?? 12
    console.log(val1)

    val1 = null ?? undefined ?? 20
    console.log(val1)
*/

// => Terniary Operator **************************************************
// Syntax: condition ? true : false

    const iceTeaPrice = 100 
    iceTeaPrice >= 85 ? console.log("Price greater than 85") : console.log("Price less than 85")