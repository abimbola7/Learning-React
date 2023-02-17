import React from "react";
import Date from "../Date/Date";


function TableData(props) {
    return (
        <tr className="border border-t">
            <td>{props.dataName}</td>
            <td>{props.dataSchool}</td>
            <td>{props.dataAge}</td>
            <td>
                <Date
                date={props.dataDate}/>
            </td>
        </tr>
    )
}

export default TableData;