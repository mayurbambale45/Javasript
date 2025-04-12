// ***************************** Arrays  Part-1=>

    // Declaration of Array => 
    const myArr = [1, 2, 3, 4, 5, 6]
    const myArray = ['a', 'b', 'c', 'd', 'e'] // => inside array values called elements
    const myArray2 = new Array(1, 2, 3, 4, 5)

    // console.log(myArray[2])

//Array Methods =>
    myArr.push(7)
    myArr.push(8)
    myArr.push(10)
    // console.log(myArr)
    myArr.pop()         // => No arguments req. Remove last value
    // console.log(myArr)

    myArr.unshift(9)    // => Insert at starting of array (index[0]). Shift all the next values (not used mostly)
    // console.log(myArr)
    myArr.shift()       // => Remove element from starting (at index[0])
    // console.log(myArr)

    // console.log(myArr.includes(9))      // => Check value is included or not
    // console.log(myArr.indexOf(7))       // => Find index of given value    
    // console.log(myArr.length)           // => Find length of Array

const newArray = myArr.join()

// console.log(myArr)       // => Type is Object
// console.log(newArray)    // => Type is String

// Slice & Splice => ****************** Most important for Interview **************************
    console.log("A ", myArr);

    const myA1 = myArr.slice(1, 3)      // => Return section of [ )
    console.log(myA1)
    console.log("B ", myArr);

    const myA2 = myArr.splice(1, 3)      // => Return section of [ ] & selected elements are remove from original array. 
    console.log(myA1)
    console.log("C ", myArr);


// ***************************** Arrays  Part-2=>