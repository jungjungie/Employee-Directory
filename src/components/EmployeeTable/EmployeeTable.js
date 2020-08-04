import React from "react";

export default function EmployeeTable(props) {
    return (
        <main className="row">
            <div className="col s1"></div>
            <table className="striped col s12 m10">
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={props.sortByName}>Name</th>
                        <th onClick={props.sortByPhone}>Phone</th>
                        <th onClick={props.sortByEmail}>Email</th>
                        <th onClick={props.sortByDOB}>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
            <div className="col s1"></div>
        </main>
    )
}