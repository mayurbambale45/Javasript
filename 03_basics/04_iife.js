// IIFE - Immediately Invoked Function Expressions (IIFE)
// Why use? => Problem with global scope pollution, hence remove global scope pollution we use IIFE.

// => In this way we can also call function Immediately. 
// => (Function Definition)(For Execution Call)

    (function Chai(){
        console.log('DB Connected 1')
    })();           // Here ;(explicitely) is required to terminate and perform 2nd function.


    (function Chai2() {
        // Here it is name IIFE.
        console.log(`DB connected 2`)
    })();           // If not put ; before of this function then it give error.

    (() => {
        console.log(`DB connected 3`)
    })();           // This is also valid syntax for declare function using IIFE.

    ((name) => {
        console.log(`DB connected 3 ${name}`)
    })('Mayur');           // passing arguments is also possible in this way

