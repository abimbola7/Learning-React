import React, { useState } from "react";
import "./ExpenseForm.css"
const c= console.log.bind(document);

const ExpenseForm = ()=>{
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle : "",
        enteredAmount : "",
        enteredDate : "" 
    })


    const titleChangeHandler = (event)=>{
        // c(event.target.value)
        // c(setEnteredTitle(event.target.value));
        setUserInput({
            enteredTitle : event.target.value, 
            ...userInput
        })

        //third alternative
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle : event.target.value };
        // })
    }
    const amountChangeHandler = (event)=>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            enteredAmount : event.target.value, 
            ...userInput
        })
    }
    const dateChangeHandler = (event)=>{
        // setEnteredDate(event.target.value);
        setUserInput({
            enteredDate : event.target.value, 
            ...userInput
        })
    }
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31"
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two,  ...rest] = numbers;
c(rest); 
// c(one);

export default ExpenseForm