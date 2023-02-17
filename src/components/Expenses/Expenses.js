import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

const c = console.log.bind(document)

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");

    const onChangeHandler = (event) => {
        // c("Event", event);
        setFilteredYear(event);
    }

    const filteredExpenses = props.exp.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expenseConte nt = <p className="text-white text-2xl">No Expense Found</p>


    return (    
        <li>
            <Card className="expenses">

                <ExpenseFilter
                selected={filteredYear}
                changeHandler={onChangeHandler}
                />

                <ExpenseChart
                expenses1={filteredExpenses}/>
                
                <ExpenseList
                filtExp={filteredExpenses}/>
                {/* {filteredExpenses.length === 0 ? (
                    <p className="text-white text-2xl">No Expenses Found</p> 
                ): 
                (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        />
                    ))
                )
                } */}
            </Card>
        </li>
        
    )
    
}

export default Expenses;