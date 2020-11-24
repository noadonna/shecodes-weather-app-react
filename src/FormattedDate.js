import React from "react";

export default function FormattedDate(props) {
    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
    let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday"
    ];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
     if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
    <div>
        {day}, {month} {date}, {hours}:{minutes}
    </div>
    );
}