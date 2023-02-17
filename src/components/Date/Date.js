import React from "react";
const c = console.log.bind(document);
function Date(props) {
    const month = props.date.toLocaleString("en-US", {month:"long"})
    const day = props.date.toLocaleString("en-US", {day:"2-digit"})
    const year = props.date.getFullYear()
    c(month)
    return (
        <div>
            {month} {day} {year}
        </div>
    )
}

export default Date