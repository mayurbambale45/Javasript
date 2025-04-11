// Date
/*
    let myDate = new Date()
    console.log(typeof myDate)                  // => Object
    console.log(myDate.toString());             // => Fri Apr 11 2025 03:55:10 GMT+0000 (Coordinated Universal Time)
    console.log(myDate.toDateString());         // => Fri Apr 11 2025
    console.log(myDate.toISOString());          // => 2025-04-11T03:55:10.430Z
    console.log(myDate.toLocaleString());       // => 4/11/2025, 3:55:10 AM
    console.log(myDate.toLocaleDateString());   // => 4/11/2025
    console.log(myDate.toLocaleTimeString());   // => 3:55:10 AM

*/
        let newDate = new Date(2025, 3, 11)
        console.log(newDate.toLocaleDateString()) // => For having over Date in date format 

        let newDateTime = new Date(2025, 3, 11, 13, 30)
        console.log(newDateTime.toLocaleString()) // => For having over Date & Time in date format 

        let newFormat = new Date("04-11-2025")    // => Format:("YYYY-MM-DD") or Indian format:("MM-DD-YYYY") Can use
        console.log(newFormat.toLocaleDateString())


// TimeStamp
        let myTimeStamp = Date.now()            // => For return current timestamp (value(output) are in ml (mili-second))
        // console.log(myTimeStamp)
        // console.log(newFormat.getTime())
        // console.log(Math.floor(Date.now()/1000)) // => Give output in Seconds (Round up using floor function)

        let new_date = new Date()
        console.log(new_date.getDay())
        console.log(new_date.getFullYear())
        console.log(new_date.getMonth() + 1)  // => Month start from '0'
        console.log(new_date.getDate())
        console.log(`The Hours are ${new_date.getHours()} hrs.`) // => For printed output

        // => For define out format
        new_date.toLocaleString('default', {
            weekday: "long"
        })

