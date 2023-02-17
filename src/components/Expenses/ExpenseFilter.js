import React from "react";
import "./ExpenseFilter.css";
const c = console.log.bind(document);

const ExpenseFilter = (props) => {
    // c(props.selected);
    const dropdownChange = (event) => {
        c(event.target.value);
        props.changeHandler(event.target.value);
    };
    return (
        <div className="text-white px-2">
            <div className="flex w-full items-center justify-between mt-2">
                <label>Filter by year</label>
                <select
                value={props.selected} 
                onChange={dropdownChange}
                className="text-black">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}


export default ExpenseFilter;