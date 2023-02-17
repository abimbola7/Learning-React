import { useState } from "react";
import Arrays from "./components/NewExpense/Arrays";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/form";
import Comp1 from "./components/Comp1/comp1";
import Form1 from "./components/Form/form1";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import Chart from "./components/Chart/Chart";

function App() {
  const [expenses, setExpensess] =  useState([
    {
      id: 1,
      title : "Car insurance",
      amount : 294.67,
      date : new Date(2019, 0, 24) 
    },
    {
      id: 2,
      title : "Toilet Paper",
      amount : 94.67,
      date : new Date(2022, 0, 25)
    },
    {
      id : 3,
      title : "New TV",
      amount : 24.67,
      date : new Date(2021, 0, 31)
    },
    {
      id : 4,
      title : "New Desk",
      amount : 294.67,
      date : new Date(2020, 1, 3)
    },
  ])

  const getData = (data) => {
    console.log(data); 
  }


  const [student, newStudent] = useState([
    {
      name : "Abimbola",
      school : "OAU", 
      age : 22,
      date : new Date(2023, 5, 21)
    },
    {
      name : "Everhard",
      school : "UI", 
      age : 34,
      date : new Date(2023, 7, 7)
    },
    {
      name : "Pelumi",
      school : "Bowen", 
      age : 20,
      date : new Date(2023, 3, 5)
    },
  ])

  console.log(student)
  // const [arr, newArr] = useState([
  //   {
  //     name: 'Abimbola',
  //     school: 'OAU',
  //     age: 22
  //   }
  // ]);

  // const newerOne = {};

  // const pushh = () => {
  //   newArr([...arr, newerOne]) 
  //   console.log(arr)
  // }


  const newArr = [
    {name : "Oladosu", age: 20},
    {name : "Pelumi", age: 40},
  ]

  newArr[0].age += 20;
  console.log(newArr[0].age);


  const addExpenseHandler = expense => {
    console.log("In app js");
    // console.log(expense);  
    // console.log(expenses);
    console.log(expenses);
    // setExpensess([...expenses, expense]);
    setExpensess(prevState => {
      return [...prevState, expense];
    });
  };

  const addData = datas => {
    console.log(datas);
    newStudent([...student, datas]);
    console.log(student);
  }

  return(
    <div>
      {/* <Chart/> */}
      <Form1
      onAddData={addData}/>
      <Comp1
      data={student}/>
      <Arrays/>
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
