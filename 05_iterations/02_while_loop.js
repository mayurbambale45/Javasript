//*********************** */ Syntax of while loop =>
/*
    let initaialization = 0
    while (condition) {
        console.log(`print`)
        iteration++
    }
*/

/*
    let index = 0
    while (index <= 10) {
        console.log(`Index value: ${index}`)
        index += 2
    }

    let array = ['aaa', 'bbb', 'ccc']
    let i = 0
    while (i < array.length) {
        console.log(`value is ${array[i]}`)
        i += 1;
    }

*/


// =>*********************** Do While Loop => Syntax
/*
    let initaialization
    do {
        console.log(`print`)
        iteration++
    } while (condition);

*/

// Do first check later -> Hence here one time 11 is print.
// Rarely used this loop.
    let score = 11
    do {
        console.log(`score is: ${score}`)
        score++
    } while (score<=10);
