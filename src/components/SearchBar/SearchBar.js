import React from "react";

export default function SearchBar(props) {
    return (
        <>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="center" type="text" placeholder="Search by name or phone" onChange={props.filterSearch} />
        </>
    )
}