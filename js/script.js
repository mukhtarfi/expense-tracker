// Set the default currency as SGD
const currency = 'SGD'

// Access the DOM
// Point to where you want to edit
const balance = document.querySelector('#balance p')
const income = document.querySelector('#income p')
const expense = document.querySelector('#expense p')
const expenseList = document.querySelector('#expense-list')

// Get the current user from localStorage
//  -- add codes here --
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
console.log('current user details', currentUser)

function displayBalance() {

  // Update the balance based on the user's data
  balance.innerHTML = `${currency} ${currentUser.balance}`

  // calculate the total income and update our HTML
  const totalIncome = calculateSum(currentUser.incomes)
  income.innerHTML = `${currency} ${totalIncome}`

  // calculate the total expenses and update our HTML
  const totalExpense = calculateSum(currentUser.expenses)
  console.log('total Expense', totalExpense)
  expense.innerHTML = `${currency} ${totalExpense}`
}

// Runs at least once when user loads the web app
displayBalance()

function calculateSum(property) {

  // recursion array method to get total sum inside an array
  const result = property.reduce((a, b) => {
    console.log('a =>', a, 'b =>', b)
    return a + b.amount // a = new sum (e.g. a = 0 +10, a = 10) from previous round, b = next object with an "amount" property (e.g. b={amount:20, title:"Dinner"})
  }, 0) // here
  return result
}

// link to expense title, expense amount, expense form with DOM
const expenseTitle = document.querySelector("#expense-title")
const expenseAmount = document.querySelector("#expense-amount")
const expenseForm = document.querySelector("#expense-form")

function addExpense() {

  // get the user input
  const newExpense = {
    amount: Number(expenseAmount.value),
    title: expenseTitle.value
  }

  // update the database with the new expense object by pushing the new expense object into the currentUser
  currentUser.expenses.push(newExpense)

  // pass in a negative value so that it's accounted for when adding with the balance
  updateBalance(-newExpense.amount)
  // calculate the NEW total expenses and update our HTML
  displayBalance()

  // append the new items into the HTML expense list
  expenseList.innerHTML += `<li> ${newExpense.title}  ${currency}${newExpense.amount} </li>`
  console.log('updatedData', currentUser)
}

// add an event listener to the expenseForm to listen for submit
expenseForm.addEventListener('submit', (event) => {

  // prevents the website from auto-refreshing
  event.preventDefault()
  addExpense()

  // clear the form details after expense has been added to the user object (the "database")
  expenseForm.reset()
})

// link to expense title, expense amount, expense form with DOM
const incomeTitle = document.querySelector("#income-title")
const incomeAmount = document.querySelector("#income-amount")
const incomeForm = document.querySelector("#income-form")

function addIncome() {

  // get the user input
  const newIncome = {
    amount: Number(incomeAmount.value),
    title: incomeTitle.value
  }

  // update the database with the new income object by pushing the new income object into the currentUser
  currentUser.incomes.push(newIncome)
  updateBalance(newIncome.amount)
  console.log('updatedData', currentUser)
  // calculate the NEW total income and update our HTML
  displayBalance()
}

// add an event listener to the expenseForm to listen for submit
incomeForm.addEventListener('submit', (event) => {

  // prevents the website from auto-refreshing
  event.preventDefault()
  addIncome()

  // clear the form details after expense has been added to the user object (the "database")
  incomeForm.reset()
})

function updateBalance(amount) {
  // get the current balance from our user object (aka our "database")
  const currentBalance = currentUser.balance

  // update the total balance whenever an expense or income is added
  // since the amount passed in can be -ve or +ve, the following addition formula will easily take care of negative/positive amounts.
  const newBalance = currentBalance + amount
  // e.g. if -ve amount, 1000 + (-100) = 900. If +ve amount, 1000 + 100 = 1100

  // update the HTML and the user object (aka "database"
  balance.innerHTML = `${currency} ${newBalance}`
  currentUser.balance = newBalance
}

function displayExpenses(expenses) {
  // Clear off the expenseList before adding new expenses onload
  expenseList.innerHTML = ""
  // loop through all the expenses in the expense-list and list them out the moment the HTML doc loads
  expenses.forEach((expense) => {
    expenseList.innerHTML += `<li> ${expense.title} ${currency}${expense.amount} </li>`
  })
}

window.onload = () => {
  displayExpenses(currentUser.expenses)
}

// Updates, we added a categories option for our user properties
// There are 2 main categories. Expenses and Income
// Under each category there will be multiple sub-categories (e.g. Eating Out, Entertainment)

// Add new category properties to our user
// Initalize with 3 default properties
// Check

// Include a pop up to add in the options
// Have a toggle option between "Expense" and "Income"
    // Add the date
    // Add category select options (link to the categories page)
    // Add the amount
    // Add description

// -- Statistics page -- 
// Calculate the total for each amount
// Show the amount for each category
// Go through documentation and use another graph
// Add another graph for income


// -- Extra Challenge --
// List out the total amount 
// Create a new property "total" to calculate the sum for each category


