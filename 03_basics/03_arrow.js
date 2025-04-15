const user = {
    username : "Mayur",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)    // => Return empty object {}

//---------------------------------------------------------
// => This can't use inside of functions.

    function Chai(){
        let username = "Code"
        console.log(this.username)      // => Output is undefined
    }
    // Chai()
    
    const Chai1 = function(){
        let username = "Code"
        console.log(this.username)      // => Here also output is undefind
    }
    // Chai1()
//---------------------------------------------------------

    const addOne = () => {
        let username = "Code"
        console.log(this)      // => Here also output is undefind
    }
    // addOne()
    
// => Basic arrow Function =>    
    const addTwo = (num1, num2) => {
        return num1 + num2
    }

    console.log(addTwo(4, 6))

// => Implicit Return - not required written of RETURN 
    const addThree = (num1, num2) =>  num1 + num2

    console.log(addThree(2, 3))

// => Wrapped in {} req. to write RETURN, but when wrapped in () not req. to qrite RETURN
    const addFour = (num1, num2) =>  (num1 + num2)

    console.log(addFour(2, 3))

// => {} Required when return object.
const addFive = (num1, num2) =>  ({username : "Mayur"})

console.log(addFive(2, 3))
