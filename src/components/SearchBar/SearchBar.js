import React from "react";

export default function SearchBar(props) {
    return (
        <div id="searchContainer" className="center">
            <i className="fa fa-search" aria-hidden="true"></i>
            <div id="searchInput">
                <input className="center" type="text" placeholder="Search by name or phone" onChange={props.filterSearch} />
            </div>
        </div>
    )
}