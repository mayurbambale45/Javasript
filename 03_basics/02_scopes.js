// => -------------- Scope --------------------------------
// Most Usable in loops when we declare 'i' then it not affect outside the loop

let a = 101
    if (true){
        let a = 10
        const b = 30
        // var c = 20
        // d = 40
        // console.log("Block Scope value " + a)   
    }

    // console.log("Global Scope value " + a)       // => Local Scope, Give Error
    // console.log(b)           // => Local Scope, Give Eroor

    // console.log(c)          // => VAR have local scope but access outside of local scope, hence VAR not use most time because it use outside of scope
    // console.log(d)          // => By default also have VAR      

// ----------------------------------------------------------------------------

    // Nested Scope
    function one(){
        const userName = "Mayur"

        // INNER Function can access OUTSIDE Function, but vice-versa not possible/
        function two(){
            const website = "YouTube"
            console.log(userName)
        }
        // console.log(website)         // => Acces outside the local scope hence give error

        two()
    }

    // one()


// =>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Basic Function

    function addOne(num){
        return num+1
    }
    console.log(addOne(5))           

 //  => Also can Call before declaration of function, NO Error. 
    console.log(addOne1(5))          
    function addOne1(num){
        return num+1
    }

// -----------------------------------------------------------------------------

// Expression also called Function
    const addTwo = function(num){
        return num+1
    }

   console.log (addTwo(5))

// It gives errror
    // console.log (addTwo2(5))
    // const addTwo2 = function(num){
    //     return num+1
    // }


    