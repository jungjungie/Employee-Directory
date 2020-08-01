import React from "react";

export default function EmployeeTable() {
    return (
        <>
            <div className="row">
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
                        <tr>
                            <td>1</td>
                            <td>Alvin Shaw</td>
                            <td>1234567890</td>
                            <td>alvin@email.com</td>
                            <td>01/01/1990</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sally Hunt</td>
                            <td>0987654321</td>
                            <td>sally@email.com</td>
                            <td>06/22/1983</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bob Tucker</td>
                            <td>435968483766</td>
                            <td>bob@email.com</td>
                            <td>11/06/1986</td>
                        </tr>
                    </tbody>
                </table>
                <div className="col s1"></div>
            </div>
        </>
    )
}