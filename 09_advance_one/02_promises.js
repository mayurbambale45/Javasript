/*
PROMISES :- A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
=> A Promise is a guarantee that you’ll get a result later — either success or failure.

Three states of promises 
1. pending
2. fulfilled
3. rejected
*/

// => promise-1 *******************************
  const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls.
    setTimeout(function(){
      console.log('Async task is complete');
      resolve()
    }, 1000)
  })  

  promiseOne.then(function(){
    console.log("Promise consumed");
  })


// => promise-2 *******************************
  new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Async task two");
      resolve();
    }, 1000)
  }).then(function(){
    console.log("Asynce 2 resolved");
  })

// => promise-3 *******************************
  const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({usersname: "Chai", email:"chai@code.com", }) // Can pass data
    }, 1000);
  })
  promiseThree.then(function(user){
    console.log(user)
  })

// => promise-4 *******************************
  const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true; // true -> throw error / false -> return output
      if(!error){
        resolve({usersname:"Chai", password:"code123"})
      }else{
        reject('error: Promise 4 - something went wrong!')
      }
    }, 1000);
  })
  // We can do chaining of .then()
  promiseFour
  .then((user) => {
    console.log(user);
    return user.usersname;
  })
  .then((usersname) => {
    console.log(usersname);
  })
  .catch(function(err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promises either resolve or rejected");
  }) // By default run at the end.


// => promise-5 (Syntax difference from promise - 4)*******************************
    const promiseFive = new Promise ((resolve, reject) => {
      setTimeout(() => {
        let error = true; // true -> throw error / false -> return output
        if(!error){
          resolve({usersname:"Javascript", password:"pass123"})
        }else{
          reject('error: promise 5 - JS went wrong!')
        }
      }, 1000)
    });

    async function consumePromiseFive() {
        try {
          const response = await promiseFive;
          console.log(response);
        } catch (error) {
          console.log(error);
        } 
    }
  consumePromiseFive()


// => Behind the scene *******************************

    // async function getAllUsers() {
    //   try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json() // await becuase json take time for conversion
    //     console.log(data);  
    //   } 
    //   catch (error) {
    //      console.log("E: ",error);
    //   } 
    // }
    // getAllUsers()

// => Above code using .then().

  fetch('https://api.github.com/users/mayurbambale45')
  .then((response) => {
    return response.JSON()
  })
  .then(() => console.log(data))
  .catch((error) => console.log(error))