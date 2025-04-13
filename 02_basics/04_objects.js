// 2. => Object Constructor : (Sinlgeton)

    // Declare object methods ->
    // Object.create

    // const thinderUser = {}               // => Non-Singleton Object
    const thinderUser = new Object()        // => Singleton Obj/ect
    
    thinderUser.id ="2135"
    thinderUser.name = "Sammy"
    thinderUser.age = 29
    thinderUser.isLoggedIn = false
    
    // console.log(thinderUser)

//*********** => Nested Objects 
    const regularUser = {
        email : "some@gmail.com",
        fullName: {

            userFullName: {
                firstName: "Mayur",
                LastName: "Bambale",
            },
            ClientFullName: "John Abraham",
        },
        userAge: 25,
    }

/*
    console.log(regularUser.fullName)
    console.log(regularUser.fullName.userFullName)
    console.log(regularUser.fullName.userFullName.firstName)
    console.log(regularUser.fullName.ClientFullName)
    console.log(regularUser.userAge)
*/
    
//*********** => Merge Values

    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "c", 4: "d", 5: "b"}
    const obj =  {6: "a", 7: "b", 8: "c"}

    const obj3 = {obj1, obj2}                       // => Both object come inside object(hence, not used) 
    const obj4 = Object.assign(obj1, obj2)          // => Values come in single object
    const obj5 = Object.assign({}, obj1, obj2, obj) // => assign(target, source) -> Less Usable

    const obj6 = {...obj1, ...obj2, ...obj}         // => Most Usable Syntax of Merging object.
    
    // console.log(obj6)

//*********** => 
    const users = [
        {
            id:1, 
            email: "aaa@gmail.com",
        },
        {
            id:2, 
            email: "bbb@gmail.com",
        },
        {
            id:3, 
            email: "ccc@gmail.com",
        },
        {
            id:4, 
            email: "ddd@gmail.com",
        },
    ]

    users[1].email

    console.log(thinderUser)        
    console.log(Object.keys(thinderUser))       // => Output values datatype is array
    console.log(Object.values(thinderUser))     // => Output values datatype is array
    console.log(Object.entries(thinderUser))    // => Output is array inside array
    console.log(thinderUser.hasOwnProperty('isLoggedIn'))   // => (property) is present or not
