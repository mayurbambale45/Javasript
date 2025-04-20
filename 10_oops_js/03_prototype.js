let myName = "Mayur   "

// console.log(myName.trueLength());       // => We have to make this method for not count empty spaces.

let myHeros = ['thor', 'spiderman', 'khali']

    let heroPower ={
        thor: "hammer",
        spiderman: "sling",

        getSpiderPower: function(){
            console.log(`spider power is ${this.spiderman}`);
            
        }
    }

    Object.prototype.Hitesh = function(){
        console.log(`Hitesh is present in all object `);
        
    }
    // heroPower.Hitesh()
    // myHeros.Hitesh()            // => Access top level hierarchy and give power to it.


    Array.prototype.Mayur = function(){
        console.log(`MAYUR is present in FIRST object `);
    }
    // myHeros.Mayur()
    // heroPower.Mayur() => Throw error

// Inheritance =>
    const user = {
        username: "chai",
        email: "chai@google.com",
    }
    const Teacher = {
        makeVideo: true,
    }
    const TeachingSupport = {
        isAvailable: false,
    }
    const taSupport = {
        makeAssignment: 'js assignment',
        fullTime: true,
        __proto__: TeachingSupport,
    }
    Teacher.__proto__ = user

    // modern syntax
    Object.setPrototypeOf(TeachingSupport, Teacher)

    let Auser  = "ChaiaurCode          "
    String.prototype.trueLength = function () {
        console.log(`${this}`);     // => return ChaiaurCode
        // console.log(`${this.name}`);
        console.log(`True length is: ${this.trim().length}`);  
    }
    Auser.trueLength() 
    "Mayur".trueLength();
    "iceTea".trueLength();