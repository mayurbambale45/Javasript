// => *************** For in - Loop ***********************
/*
// => for Object : working on array
    const myObject = {
        js : "javascrip",
        cpp : "c++",
        rb : "ruby",
        swift : "swift by apple"
    }
    for (const key in myObject) {
        console.log(`${key}:- ${myObject[key]}`)   
    }
*/

// => For Array : woring on array
    const plang = ["cpp", "java", "php", "js", "c", "python"]
    for (const key in plang) {
        // console.log(key, plang[key])            // for printing key-value
    }

// => on Map : not working on map (can't do iterations on map)
/*
    const map = new Map()
    map.set('IN', "INDIA")
    map.set('USA', "UNITED STATES OF AMERICA")
    map.set('UK',  "UNITED KINGDOM")
    map.set('IN', "INDIA")

    for (const key in map) {
        console.log(key)
        
    }
*/