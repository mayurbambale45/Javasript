const fname = "Tiger"
const repoCount = 30

// Outdated syntax (old - not used in modern time) =>
    // console.log("My Name is " + fname + " and my repocount is "+repoCount) 

//Modern way of syntaxm => we can use any built in function in that 
    console.log(`Hello my name is ${fname.toUpperCase()} and my repocount is ${repoCount}`) 

// **********************************************************

    // console.log(typeof fname) // => Here type is string

//string declare (new syntax) 
    const newGame = new String('College')
    // console.log(typeof newGame)    // => here type of string is object
    // console.log(newGame[0])        // => Can access Key-Value pair
    // console.log(newGame.__proto__) // => Output is {}

    //prototype methods =>
        console.log(newGame.length)     // => not function
        console.log(newGame.charAt(2))  // => Find character at this index
        console.log(newGame.indexOf('i')) // => Find position of character
        console.log(newGame.toLowerCase()) // => Conver to LowerCase also toUpperCase
        
    const newString = newGame.substring(0, 4) // Start included, End not included => [ )
    console.log(newString)

    const anotherString = newGame.slice(-6, 5) // Can give -ve values => Start Reverse
    console.log(anotherString)

    const newString1 = "    Satara and  pune    "
    console.log(newString1)
    console.log(newString1.trim()) // => Remove extra spaces at start and end not between two strings

    const url = "https://college.come/college%20sangli"
    console.log(url.replace('%20', '-')) // => replace('searchValue', 'ReplaceValue')
    console.log(url.includes('college')) // => Find keyword include or not and return T & F
    
    const newString2 = " Satara, nagar and pune "
    console.log(newString2.split(' '))   // => Split basis on spaces also can do on basis of any string like '-'. It return Array

    