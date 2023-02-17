import React, {useState} from "react";
const c = console.log.bind(document);

function Form1(props) {
    const [name, newName] = useState("");
    const [school, newSchool] = useState("");
    const [age, newAge] = useState("");
    const [date, newDate] = useState("");

    const inputName = (e) => {
        c(e.target.value);
        newName(e.target.value);
    };
    
    const inputSchool = (e) => {
        newSchool(e.target.value);
    };

    const inputAge = (e) => {
        newAge(e.target.value);
    };

    const inputDate = (e) => {
        newDate(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const newArray =
            {
                name : name,
                school : school,
                age : age,
                date : date
            }
        c(newArray)
        props.onAddData(newArray)
    }
    return (
        <div className="mt-10 ml-10">
            <form 
            className="flex flex-col space-y-2"
            onSubmit={submitForm}>
                <div className="flex space-x-4">
                    <div className="">
                        <label>Name: </label>
                        <input 
                        type="text" 
                        className="border p-2 rounded-md focus:outline-none"
                        onChange={inputName}
                        value = {name}/>
                    </div>
                    <div className="">
                        <label>School: </label>
                        <input 
                        type="text" 
                        className="border p-2 rounded-md focus:outline-none"
                        onChange={inputSchool}
                        value = {school}/>
                    </div>
                    <div className="">
                        <label>Age: </label>
                        <input 
                        type="text" 
                        className="border p-2 rounded-md focus:outline-none"
                        onChange={inputAge}
                        value = {age}/>
                    </div>
                    <div className="">
                        <label>Date: </label>
                        <input 
                        type="text" 
                        className="border p-2 rounded-md focus:outline-none"
                        onChange={inputDate}
                        value = {date}/>
                    </div>
                </div>
                <button
                className="py-2 px-2 bg-green-500 w-32 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form1