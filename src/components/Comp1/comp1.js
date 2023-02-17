import React, {useState} from "react";
import "./comp1.css"
import TableData from "./TableData";

function Comp1(props) {
    return (
        <div>
            <div className="">
                <p className="text-7xl">Hello World</p> 
            </div>

            <div className="ml-10">
                <table className="border border-black rounded-t-md w-full text-center">
                    <thead className="">
                        <tr>
                            <th>Name</th>
                            <th>School</th>
                            <th>Age</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <TableData
                        dataName={props.data[0].name}
                        dataSchool={props.data[0].school}
                        dataAge={props.data[0].age}
                        dataDate={props.data[0].date}
                        />
                        <TableData
                        dataName={props.data[1].name}
                        dataSchool={props.data[1].school}
                        dataAge={props.data[1].age}
                        dataDate={props.data[1].date}
                        />
                        <TableData
                        dataName={props.data[2].name}
                        dataSchool={props.data[2].school}
                        dataAge={props.data[2].age}
                        dataDate={props.data[2].date}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Comp1