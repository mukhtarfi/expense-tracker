//Get the user from our user.js script (standardize one place to get our central user data from)
import {userRecords} from './users.js'

console.log('userRecords from user.js',userRecords) //check if the JavaScript files are linked successfully

const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const signupForm = document.querySelector('#signup-form')

// 1. Register new users into our userRecords
signupForm.addEventListener('submit',(event)=>{
    event.preventDefault() // we don't need to include this as we expect our input data to be automatically removed before going into our main page
    
    // 1a. Get our username and password values
    const username = inputUsername.value
    const password = inputPassword.value

    // 1b. Create a new user object with name, passwor\d, expenses, incomes, and balance properties. Initialize expenses and incomes as empty arrays, and balance as 0.
    const user = {
        name:username,
        password:password,
        expenses:[],
        incomes:[],
        balance:0,
    }
    console.log('userRecords',userRecords)
    const userExists = checkIfUserExists(username)
    // 1c. Push this new user into our userRecords array

    // We can add an if statement to check if userExists, so that we only push in a new user when userExists is false (not found)
    if(!userExists){ // !false = true. Same as 2 negatives makes one positive, we're using ! to reverse the false statement to make it true
        
        userRecords.push(user)
        console.log('updated UserRecords',userRecords)
        // 2. Store our userRecords into our database Local Storage database
        //localStorage.setItem('key', 'value')
        localStorage.setItem('userRecords', JSON.stringify(userRecords))
    }

    // Quick test to see if our localStorage data has been updated with the latest userRecords 
    const userRecordsFromLocalStorage = JSON.parse(localStorage.getItem('userRecords'));
    console.log(userRecordsFromLocalStorage)

    signupForm.reset()
})



//localStorage.getItem('user')
// but since this is a string JSON file, we need to convert it back to a proper JSON file


// 3. Add the codes needed to automatically GET our studentRecords from Local Storage instead of our hard-coded started userRecords data


// 🧠 Challenge: Create a function checkUserExists() to check if users already exists. 
// If yes, alert users that user already exists + prevent it from being added to the userRecords array. Must also return if true or false
// (Bonus: For more advanced students, try using ternary operators)

function checkIfUserExists(username){
    // The .some() method in JavaScript checks if at least one element in the array meets a certain condition defined in a testing function. It returns true as soon as the condition is met by any element, and false if no elements meet the condition.
    const isExists = userRecords.some(user => user.name === username)  
    
    isExists? alert(`User ${username} already exists`): alert(`New user ${username} has been added successfully!`)
    // if True, then alert user already exists
    // else False, alert new user has been added successfully

    return isExists
}


// 🧠🧠 Challenge: Update our function checkUserExists() to check if users already exists, but from Local Storage

// ---- Practice your Local Storage basic CRUD codes here ---- 


