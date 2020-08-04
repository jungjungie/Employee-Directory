import React from "react";

export default function TableRows(props) {
    return (
        <tr>
            <td>
                <img src={props.image} alt={props.name} />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.DOB}</td>
        </tr>
    )
}