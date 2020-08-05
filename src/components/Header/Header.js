import React from "react";

export default function Header() {
    return (
        <header>
            <h1 className="center">EMPLOYEE DIRECTORY</h1>
            <div className="instructions">
                <p className="center">Welcome to the employee directory!</p> 
                <p className="center">Search by name or phone number, or filter by column.</p>
            </div>
        </header>
    )
}