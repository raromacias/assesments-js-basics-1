//*Create a var called password and set it to a string of my choosing.
//Create a conditional statement that checks if the password meets the following criteria;
//At least 10 characters long
//Contains at least one letter and one number
//if it meets constraint console log a success message if it fails console log a failure message
//test out the conditional by using different values for password.

let password = "KobeBean24"
let testArr = password.slice(0, password.length)
console.log(testArr)
console.log(password.length)
    if(password.length >= 10){
        console.log("Success!")
    }else{
        console.log("Failure!")
    }
    // for (i=0; i < password.length; i++){
        
    // }

    