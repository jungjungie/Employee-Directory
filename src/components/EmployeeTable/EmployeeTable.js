import React from "react";

export default function EmployeeTable(props) {
    return (
        <main className="row">
            <div className="col s1"></div>
            <table className="striped col s12 m10">
                <thead>
                    <tr>
                        <th></th>
                        <th onClick={props.sortByName}>Name <i className="fa fa-caret-down" aria-hidden="true"></i></th>
                        <th onClick={props.sortByPhone}>Phone <i className="fa fa-caret-down" aria-hidden="true"></i></th>
                        <th onClick={props.sortByEmail}>Email <i className="fa fa-caret-down" aria-hidden="true"></i></th>
                        <th onClick={props.sortByDOB}>DOB <i className="fa fa-caret-down" aria-hidden="true"></i></th>
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