// for loop =>
/*
    for (let i = 0; i <= 10; i++) {
        const element = i
        console.log(element)
        if(element == 5) console.log("5 is best number")
        // console.log(i)
    }
*/


// Nested loop =>
/*
    for (let i = 1; i <= 3; i++) {
        console.log(`Outer loop value: ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`Inner loop value: ${j}`);   
            console.log(` ${i} * ${j} = ${i*j}`)         
        }   
    }
*/


// Loop on Array =>
/*
    let myArray = ['flash', 'batman', 'superman']

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        console.log(element)    
    }
*/

// Conditions in loop (break & continue)=>
// break =>
/*
    for (let i = 1; i <= 20; i++) {
        // if(i%2 == 0) console.log(`${i}`) 
        if (i == 5)
            {
            console.log(`detected 5`)
            break;                      // when this execute loop is terminated
            } 
    console.log(`vaue of i is ${i}`)
    }
*/

// continue =>

    for (let i = 1; i <= 20; i++) {
        // if(i%2 == 0) console.log(`${i}`) 
        if (i == 5)
            {
            console.log(`detected 5`)
            continue;                      // when this execute loop is terminated
            } 
    console.log(`vaue of i is ${i}`)
    }