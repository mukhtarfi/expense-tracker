import { userRecords } from './users.js'

console.log('userRecords', userRecords)

const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const loginForm = document.querySelector('#login-form')

// 🧠🧠 Challenge: Make a function that will run after user submits their login details. 
// If the user is found in the Local Storage database, redirect the user to the index.html page
// If user is not found, alert user doesn't exist and redirect them back to the signup page.

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const username = inputUsername.value
  const password = inputPassword.value

  const user = userRecords.find(user => user.name === username);

  if (!user) {
    alert('User does not exist!');
    window.location.href = './html/signup.html';
  } else {
    if (user.password === password) {
      alert('Logged in successfully!');

      console.log('current logged in user', user)
      // store the current user into our localStorage to allow the data to persist'
      localStorage.setItem('currentUser', JSON.stringify(user)) //key, variable

      window.location.href = './html/index.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
})

// 🧠🧠 Challenge: Refactor the code in script.js to update the current user variable after they've logged in
