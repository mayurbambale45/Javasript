// ************************* Functions *******************

// Syntax of definition & declaration of function
function myName (){
    console.log("M")
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("R")
}

/*
    // => Not required type of data

    When Declare function definition ->

    function functionName(Parameter1, parameter2, ...){
        // Inside work
    }
    
    Function Call ->
    functionName(Argument1, Argument2, ...)
*/

// 1 => ---------------------------------------------------
    function addNumber(num1, num2){  
        console.log(num1 + num2)        // => Not Used this method for printing
    }
    // addNumber(12, 5)

// 2 => ---------------------------------------------------
    function add(num1, num2){   
        return num1 + num2              // => Most usable - Mostly return value and then print.     
    }
    // console.log(add(2, 5))

// 3 => ---------------------------------------------------
    function LoginUserMsg(username){
        return `${username} just Logged In`
    }
    // console.log(LoginUserMsg("Mayur"))
    // console.log(LoginUserMsg(""))       // => empty string output
    // console.log(LoginUserMsg())         // => Undefind output


// 4 => Way to solve undefind message ---------------------
    function LoginUserMsg1(username){
        if(username === undefined){
            console.log("Pease enter username")
            return                              // => scope terminated here not required use else
        }
        return `${username} just Logged In`
    }   
    // console.log(LoginUserMsg1()) 


// 5 => Equivalent code of 4 --------------------------------
        function LoginUserMsg2(username){
            if(!username){
                console.log("Pease enter UserName")
                return                              
            }
            return `${username} just Logged In`
        }  
    // console.log(LoginUserMsg2())

//6 => Passing default value in parameter ------------------- 
        function LoginUserMsg3(username = "Sam"){       // => Passing default Value ("Same")
            if(!username){                              // => Never go inside this block
                console.log("Pease enter UserName")
                return                              
            }
            return `${username} just Logged In`
        }  
        // console.log(LoginUserMsg3())

// 7  => Passing multiple values in function ----------------
        function CalculateCartPrice(...num) {
            return num
        }
    //console.log(CalculateCartPrice(100, 200, 250, 300))  // => Return Array by (...) used as Rest operator


        function CalculateCartPrice2(val1, val2, ...num) {
            return num
        }
    // console.log(CalculateCartPrice2(100, 200, 250, 300)) 

// 8 => Passing Object in Function --------------------------

        const user = {
            username:"Mayur",
            age:19 
        }

        function HandleObject(anyObject) {  // => Can pass any object here, hence can  give any name
            console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
        }

        // HandleObject(user)  // => Call Function and pass compulsorily object then only give result
        // HandleObject({
        //     username: "Mayur B",
        //     age:19
        // })                    // => In this way we can also pass object.  

// 9 => Passing Arrays in Function --------------------------
        const myNewArray = [100, 200, 250, 350, 455]

        function returnSecondValue(getArray){
            return  getArray[1]
        }
        console.log("By 1st method Second Value is " + returnSecondValue(myNewArray))


    // => In this way we can also pass array 
        function returnSecondValue2(getArray){
            return  getArray[1]
        }
        console.log("By 2nd method Second Value is " + returnSecondValue2([
            200, 300, 400, 500, 600
        ]))

// => ---------------------------------------------------