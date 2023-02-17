import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"
const ExpenseList = (props) => {

    if (props.filtExp.length === 0) {
        return <h2 className="expemse-list__fallback">Found no Expenses</h2>
    }

 return (
    <ul className="expenses-list">
            {props.filtExp.length > 0 && props.filtExp.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
            ))}
    </ul>
 )
};

export default ExpenseList;