//*Create a var called password and set it to a string of my choosing.
//Create a conditional statement that checks if the password meets the following criteria;
//At least 10 characters long
//Contains at least one letter and one number
//if it meets constraint console log a success message if it fails console log a failure message
//test out the conditional by using different values for password.

let password = "Kobebean24"
let minChar = false
let numCheck = false
let letterCheck = false

    if(password.length >= 10){
        minChar = true
    }
     for (let i=0; i < password.length; i++){
        if(!isNaN(+password[i])){
            numCheck = true
        }
        // if (password[i] === password[i].toUpperCase() && isNaN(+password[i])){
        //     upperCheck = true
        // }
     //I ended up checking for both upper case and lower case letters
        if(/[a-z]/i.test(password)){
        letterCheck = true
     }
    }
    if(minChar && letterCheck && numCheck){
        console.log("Your password fills all the requirements")
    } else {
        console.log("The password does not fill all requirements")
    }