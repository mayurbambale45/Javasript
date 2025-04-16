const array1 = [1, 2, 3, 4];

/*
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
*/

// => With function
    const myTotal = array1.reduce( function (acc, cv){ 
        return acc + cv
     },0 )
    // console.log(myTotal)

// => With Arrow function
     const myTotal1 = array1.reduce( (acc, cv) => (acc+cv), 0 )
    //  console.log(myTotal1)/


// => Example on Array and object
const shoppinCart = [
    {
        itemname: 'js course',
        price: 299,
    },
    {
        itemname:'python course',
        price: 599,
    },
    {
        itemname:'cpp course',
        price: 999,
    },
    {
        itemname:'java course',
        price: 1299,
    },
]

const Total = shoppinCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(Total)
     