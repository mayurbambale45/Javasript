// => -------------- Scope --------------------------------
// Most Usable in loops when we declare 'i' then it not affect outside the loop

let a = 101
    if (true){
        let a = 10
        const b = 30
        // var c = 20
        // d = 40
        console.log("Block Scope value " + a)   
    }

    console.log("Global Scope value " + a)       // => Local Scope, Give Error
    // console.log(b)           // => Local Scope, Give Eroor

    // console.log(c)          // => Global Scope It not give error, hence VAR not use most time because it use outside of scope
    // console.log(d)          // => By default also have VAR      

