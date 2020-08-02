import React from "react";
import TableRows from "../TableRows/TableRows";
import tempData from "../../temp.json";

export default function EmployeeTable(props) {
    return (
        <>
            <main className="row">
                <div className="col s1"></div>
                <table className="striped col s12 m10">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tempData.map(person => <TableRows image={person.image} name={person.name} phone={person.phone} email={person.email} DOB={person.DOB} />)}
                    </tbody>
                </table>
                <div className="col s1"></div>
            </main>
        </>
    )
}