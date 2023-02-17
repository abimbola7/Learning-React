import React from "react";
import { useState } from "react";

function Arrays() {
    const [arr, newArr] = useState([
        {
          name : "bimbo",
          school : "oau",
          occupation : "student"
        }
    ]);
    console.log(arr);
    return(
        <div>
            <h1></h1>
        </div>
    )
}

export default Arrays

