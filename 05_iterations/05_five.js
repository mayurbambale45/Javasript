const coding = ["js", "ruby", "python", "java", "cpp", "c"]

    // coding.forEach( function (item) {
    //     console.log(item);
        
    // } )

// => We can use arrow function

    // coding.forEach( (item) => {
    //     console.log(item)
    // } )

// => By function call

    // function printMe(item){
    //     console.log(item)  
    // }

    // coding.forEach(printMe)

// => print key, index, and full array

    // coding.forEach( (item, index, arr) => {
    //     console.log(item, index, arr)
        
    // } )

// => Iterations on -> Object inside array

    const myCoding = [
        {
            languageName : 'javascript',
            fileName: 'js'
        },
        {
            languageName : 'java',
            fileName: 'java'
        },
        {
            languageName : 'python',
            fileName: 'py'
        },
    ]   

    myCoding.forEach( (item) => {
        console.log(item.languageName, ":", item.fileName);
        
    } )