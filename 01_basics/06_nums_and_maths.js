//****************** Numbers *************************
/*
    const score = 400  // Simple and easy pattern of declare numbers
    console.log(score) // Return typeof - Number

    const balance = new Number(404.5634)
    console.log(balance) // => Return typeof - Object

    console.log(balance.toString().length) // => Convert to String and return length
    console.log(balance.toFixed(2))        // => Return fixed number after decimal
    console.log(balance.toPrecision(4))    // => Return precise value till (given) & next are round-up
    
    const hundreds = 1000000
    console.log(hundreds.toLocaleString())        // => Return US Standard commas (1,000,000)
    console.log(hundreds.toLocaleString('en-IN')) // => Return Indian Standard commas (10,00,000)
*/
//****************** Maths *************************
/*
    console.log(Math)
    console.log(Math.abs(-40))      // => Return Absolute value
    console.log(Math.round(4.56))   // => Return round of value
    console.log(Math.ceil(4.2))     // => Round value with Top (4.2 => 5) 
    console.log(Math.floor(4.9))    // => Round value with Less (4.9 => 4)
    console.log(Math.min(2, 3, 9, 5, 7, 1, 8)) // => Return minimum value
    console.log(Math.max(2, 3, 9, 5, 7, 1, 8)) // => Return maximum value
    
    console.log(Math.random())          // => Return random value between 0 & 1
    console.log((Math.random()*10) + 1) // => Return minimum value 1
    console.log(Math.floor(Math.random()*10) + 1) // => Round up value with floor
*/
    const min = 10;
    const max = 20;
    console.log( Math.floor ( Math.random() * (max - min + 1) + min ) ) // => Random number between range and round up
