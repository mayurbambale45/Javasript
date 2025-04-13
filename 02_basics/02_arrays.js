// ***************************** Arrays  Part-2=>

    const marvel_heros =['thor', 'spiderman', 'Ironman']
    const dc_heros = ['superman', 'flash', 'spiderman']

    // marvel_heros.push(dc_heros)
    // console.log(marvel_heros)    // => Come array inside as 1 element in the array, not merge both arrays.

    const all = marvel_heros.concat(dc_heros)
    // console.log(all)             // => Both arrays are merge (concat in single array).

    const all_new_heros = [ ...marvel_heros, ...dc_heros]   // => ... (Spread operator) - Function same as concat
    // console.log(all_new_heros)   // => Here also output same as concat. (Most Preferable)

    const another_arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 0, 12]]]
    const usable_arr = another_arr.flat(Infinity)  // => Give the all inside array in single simple array
                                                   // => Inside bracket () Provide depth of array, also can give infinity value
    // console.log(usable_arr)


    // console.log(Array.isArray("MyName"))        // => Check is it array ot not
    // console.log(Array.from("MyName"))           // => Convert to the array
    // console.log(Array.from({name: "MyName"}))   // => Interesting case -> Return empty array

    // => Convert multiple variable values to sinle array.
    let score1= 100;
    let score2= 200;
    let score3= 300;

    // console.log(Array.of(score1, score2, score3))   // => Return single array -> [ 100, 200, 300 ]
