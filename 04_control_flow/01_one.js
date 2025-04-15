// *************** Control Flow *****************
/*
=> IF Statement 

    if(condition){

    }
    condition - true => code execute
    condition - false => code not execute

    comparison Operator => { <, > <=, >=, ==, !=, === }
    Logical Operator => &&, ||
*/


/*
    const isUserLoggedIn = true
    const temp = 55
    if(temp <= 50){
        console.log("Temp is less than 50")
    } 
    else{
    console.log("Temp is greater than 50")
    }
    console.log("Always execute...")
*/


/*
    const score = 110
    if(score > 100){
        const power = "fly"
        console.log(`User power: ${power}`)
    }
    // console.log(`User power: ${power}`)  // => Show error due to acces power outside of Scope
*/


/*
    const balance = 1000
    // if(balance > 500) console.log("test")                           // This type of scope is also allowed
    // if(balance > 500) console.log("test"), console.log("test2");    // Never do this type of coding -> Bad practice of codint (,)
  
// => Can check multiple conditions.     
    if(balance < 500) {
        console.log("Less than 500")
    }
    else if(balance < 750){
        console.log("Less than 750")        
    }
    else if(balance < 900){
        console.log("Less than 900")        
    }
    else if(balance < 1000){
        console.log("Less than 1000")        
    }
    else{
        console.log("Less than 1200")        
    }
*/

// => Can pass multiple conditions
    const isUserLoggedIn = false
    const debitCard = true
    const LoggedInFromGoogle = true
    const LoggedInFromEmail = false

    if(!isUserLoggedIn && debitCard){
        console.log("Allowed to buy courses - &&")        
    }

    if(isUserLoggedIn || debitCard){
        console.log("Allowed to buy courses - ||")        
    }
 
    if(LoggedInFromGoogle || LoggedInFromEmail && debitCard){
        console.log("User Logged IN")
    }