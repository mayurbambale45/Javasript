const user = {
  username: "Chai",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`username: ${this.username}`);
    // console.log(this)
  }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // return this; // If not written then also return Implicitly.
}


// const userOne = User("Mayur", 12, true);
// const userTwo = User("Hitesh", 11, false); // => It overwrite the values hence used new keyword

const userOne = new User("Mayur", 12, true);
const userTwo = new User("Hitesh", 11, false); 
console.log(userOne)
console.log(userOne.constructor)  // => Reference about user.
console.log(userTwo)

// New ->
// 1. first create empty opject called instance
// 2. constructor function call due to new keyword
// 3. Inject this argument
// 4. return this 

// Note -> Learn about Instanceof method