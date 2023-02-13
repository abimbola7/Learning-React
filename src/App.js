import { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/form";

function App() {
  const [expenses, setExpensess] =  useState([
    {
      title : "Car insurance",
      amount : 294.67,
      date : new Date(2023, 0, 24) 
    },
    {
      title : "Toilet Paper",
      amount : 94.67,
      date : new Date(2023, 0, 25)
    },
    {
      title : "New TV",
      amount : 24.67,
      date : new Date(2023, 0, 31)
    },
    {
      title : "New Desk",
      amount : 294.67,
      date : new Date(2023, 1, 3)
    },
  ])
  const getData = (data) => {
    console.log(data); 
  }



  const [arr, newArr] = useState([
    {
      name: 'Abimbola',
      school: 'OAU',
      age: 22
    }
  ]);
  // const newerOne = {};

  // const pushh = () => {
  //   newArr([...arr, newerOne]) 
  //   console.log(arr)
  // }


  const addExpenseHandler = expense => {
    console.log("In app js");
    // console.log(expense);  
    // console.log(expenses);
    console.log(expenses);
    // setExpensess([...expenses, expense]);
  }

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
      exp={expenses}>
      </Expenses>
      <Form
      onSubmit={getData}/>
      <div>
        <h1>{arr}</h1>
        <button>
          Push
        </button>
      </div>
    </div>
  )
}

export default App;
