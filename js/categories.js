// when user clicks on the add button, make the modal box from display:none to display:block
const addButton = document.querySelector('#add-category-btn')
const categoryModal = document.querySelector('#add-category-modal')

addButton.addEventListener('click', () => {
  categoryModal.style.display = 'block'
})

// get the new category input and add it into our user's categories (when press on create)
const createButton = document.querySelector('#create-btn')
const inputText = document.querySelector('#category-name')

createButton.addEventListener('click', (e) => {
  e.preventDefault()

  const inputData = inputText.value
  console.log(inputData)

  // get the "currentUser" from localstorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  // update the currentUser expense categories (add a new one to existing array)
  currentUser.categories.expenses.push(inputData)

  console.log(currentUser)

  // pass it back into the localstorage
  localStorage.setItem('currentUser', JSON.stringify(currentUser))

  categoryModal.style.display = 'none'

  categoryModal.reset()
})


// if press cancel, then clear form and display to none
const deleteButton = document.querySelector('#delete-btn')

deleteButton.addEventListener('click', (e) => {
  e.preventDefault()

  categoryModal.style.display = 'none'

  categoryModal.reset()
})

// 🧠 Create the eventlistner logic for cancel button so that when user clicks on it, the input value is cleared and the modal disappers


