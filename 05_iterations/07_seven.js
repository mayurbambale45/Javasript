const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
// Map - Without return
    const newNum = myNumbers.map( (num) => num+10 )     // => Same return as Filter 
    console.log(newNum)

// Map - Wtih return
    const newNum1 = myNumbers.map( (num) => {
        return num+5
    } )     
    console.log(newNum1)

// forEach - With return
    myNumbers.forEach( (num) => {
        console.log(num+10)
    } )     
*/

// => Chaining **********************************

    const newNum = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40)

    console.log(newNum);
    