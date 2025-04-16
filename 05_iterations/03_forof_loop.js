// => *************** For of - Loop ***********************

    // ["", "", ""]
    // [{}, {}, {}]

    const arr = [1, 2, 3, 4, 5]
    for (const num of arr) {
        // console.log(num)
    }

    const greetings = "Hello world!"
    for(const greet of greetings){
        // console.log(`Each cahar is ${greet}`)
    }

// **************************** Maps **********************

//=> map is object


    const map = new Map()
    map.set('IN', "INDIA")
    map.set('USA', "UNITED STATES OF AMERICA")
    map.set('UK',  "UNITED KINGDOM")
    map.set('IN', "INDIA")
        
    // console.log(map)         // => Not include duplicate values.

    for (const [key, value] of map) {
        console.log(key, ":- ",value)
    }                           // => When we have key-value without array.



/* //=> For of not working on object  (Error:-  myObj is not iterable)
    const myObj = {
        'game1' : 'NFS',
        'game2' : 'Spiderman'
    } 

    for (const [key, value] of myObj) {
     console.log(key, ":- ", value)     
    }                           

*/

