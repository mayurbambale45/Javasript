let score = "33"

console.log(typeof score) // when accept value from frontend at backend 

let valueInNumber = Number(score)  // convert String data-type into number

console.log(typeof valueInNumber) // print typeof score
console.log(valueInNumber)        // print value stored in score variable

/*
    NOTES => Conversion of datatype (value => output type)
    "33"    => 33
    "33abc" => NaN
    "string" => NaN
    true  => 1
    false => 0
    null  => 0
    undefined => NaN
*/

let isLoggedIn = "mayur"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
    NOTES (value => output type of conversion)
    1 => true
    0 => false
    "" => false
    "string" => true
*/

//********************************* Operation ****************************

    let value = 3
    let negv = -value
    console.log(value)
    console.log(negv)

console.log(2**1)  // 2 raise to n (n=0,1,2,3....)

//String data-type conversion 
    console.log(2 + "2") 
    console.log("2" + 2) 
    console.log("2" + 4 + 3)  
    console.log(2 + 4 + "2") 

//Increment counter
    let count = 100
    count++   //(100+1)
        console.log(count)
    ++count   //(1+100)
        console.log(count)


