function setUsername(username){
    // Complex DB Calls
    this.username = username;
    console.log("username called")
}

function createUser(username, email, password){
    setUsername.call(this, username)


    this.email = email
    this.password = password

}

const chai = new createUser("Chai", "chai@google.com", "123@chai")
console.log(chai);