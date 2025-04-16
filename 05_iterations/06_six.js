/*
    const coding = ["js", "ruby", "python", "java", "cpp", "c"]

    const values = coding.forEach((item) => {
        console.log(item);
        return item                 // Not return any value    
    })

    // console.log(values);            // It gives undefined
*/

// => basics of Filter - Used for conditional check (T & F)
    let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const newnums = myNums.filter( (num) => num>5)   // Here not require write return 
    // const newnums = myNums.filter( (num) => {        // => {} here start scope hence we have to write return.
    //     return num > 4
    // }) 
    // console.log(newnums)
    
// => by using callback function - forEach
    // const newNums = []
    // myNums.forEach( (num) => {
    //         if(num>4) {
    //             newNums.push(num)
    //         }
    // } )

    // console.log(newNums)

// => 
// Filter - Without return
    const newKey = myNums.filter( (num) => num >=7 || num <= 2)
    console.log(newKey)

// Filter - With return
    const newKey1 = myNums.filter( (num) => {
        return num > 7 || num < 4
    })
    console.log(newKey1)
    