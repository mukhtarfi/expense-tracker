// Create user data for a single user
const defaultUser = {name:"guest",
                    password:"abc123",
                    expense:[
                      {amount:10,title:"Lunch"},
                      {amount:20,title:"Dinner"},
                      {amount:30,title:"Breakfast"},
                      //{amount:100,title:"BBQ Lunch"}, 
                      // we added a new expense to our userRecord expense property
                      // since it's an array, we use userRecord.expense.push()
                    ],
                    income:[
                      {amount:1500,title:"May salary"},
                      {amount:4500,title:"June salary"},
                    ],
                    balance:5000,
                    // 5000 + -newExpense.amount = 5000 + (-100) = 4900
                    // balance:4900 (new balance)
                    categories: {
                      expenses:["Eating Out","Entertainment","General"],
                      incomes:["Salary","Gift","Bonus"]
                    }    
                  }

let userRecords = [defaultUser,
    { name:"JingYong", password:"12345", expenses:[], incomes:[], balance:5000,
      categories: {
        expenses:["Eating Out","Entertainment","General"],
        incomes:["Salary","Gift","Bonus"]
      }
    },
    { name:"Chris",password:"abcde",expenses:[],incomes:[],balance:5000,
      categories: {
        expenses:["Eating Out","Entertainment","General"],
        incomes:["Salary","Gift","Bonus"]
      }},
  ]

//To initialize a key in localStorage, you can use a conditional statement to check whether the key already exists. If it doesn't, you create it.

// If 'userRecords' doesn't exist, initialize it as an empty array
if (!localStorage.getItem('userRecords')) {
  // If 'userRecords' doesn't exist, initialize it with our default userRecords
  localStorage.setItem('userRecords', JSON.stringify(userRecords));
} else{
  // if 'userRecords' already exists, we'll use the existing one from localStorage instead (which has the users' latest stored info)
  userRecords = JSON.parse(localStorage.getItem('userRecords'))
}

export {userRecords}