import React, { useState } from "react";

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const c = console.log.bind(document);

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () =>{
        c("Clicked");
        setTitle("Updated ") 
    }
    c(props.amount, props.date, props.title, "Hello World");

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

            <button 
                onClick={clickHandler}
                className="btn">
                Change Title
            </button>
        </Card>
    )
}
export default ExpenseItem;
