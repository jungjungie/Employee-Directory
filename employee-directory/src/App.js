import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import TableRows from "./components/TableRows/TableRows";
import tempData from "../src/temp.json";
import './index.css';

function App() {

	// Setting up Hooks
	const [employees, setEmployees] = useState({ original: tempData, filtered: tempData });
	const [sortName, setName] = useState("");

	// Filters the directory by the employee name or phone number entered into searchbar 
	const filterSearch = event => {

		let filtered = employees.original.filter(item => item.name.toLowerCase().includes(event.target.value) || item.phone.includes(event.target.value));

		setEmployees({ ...employees, filtered });
	}

	// Sorts employees by name when the name column is clicked
	const sortByName = () => {
		console.log("clicked")

		let sortedNames = employees.filtered.sort((a, b) => {
			const nameA = a.name;
			const nameB = b.name;

			let comparison = 0;
			if (nameA > nameB) {
				comparison = 1;
			} else if (nameA < nameB) {
				comparison = -1;
			}
			return comparison;
		})
		
		// Switches between sorting names by ascending and descending order
		if(sortName === "DESC") {
			sortedNames.reverse();
			setName("ASC");
		} else {
			setName("DESC");
		}

		setEmployees({ ...employees, sortedNames });
	}

	return (
		<>
			<Header />
			<SearchBar filterSearch={filterSearch} />
			<EmployeeTable sortByName={sortByName}>
				{employees.filtered.map(employee =>
					<TableRows
						id={employee.id}
						key={employee.id}
						image={employee.image}
						name={employee.name}
						phone={employee.phone}
						email={employee.email}
						DOB={employee.DOB}

					/>)}
			</EmployeeTable>
		</>
	);
}

export default App;
