import React from "react";

export default function Header() {
    return (
        <header>
            <h1 className="center"><span id="title-1">EMPLOYEE</span> <span id="title-2">DIRECTORY</span></h1>
            <div className="instructions">
                <p className="center">Welcome to the employee directory!</p> 
                <p className="center">Search by name or phone number, or filter by column.</p>
            </div>
        </header>
    )
}