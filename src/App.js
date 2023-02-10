import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/form";

function App() {
  const expenses = [
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
  ]
  const getData = (data) => {
    console.log(data); 
  }
  const addExpenseHandler = expense => {
    console.log("In app js");
    console.log(expense);
  }
  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
      exp={expenses}>
      </Expenses>
      <Form
      onSubmit={getData}/>
    </div>
  )
}

export default App;
