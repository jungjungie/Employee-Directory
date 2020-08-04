import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import TableRows from "./components/TableRows/TableRows";
// import tempData from "../src/temp.json";
import API from "./utils/API";
import './index.css';

function App() {

	// Setting up Hooks
	const [employees, setEmployees] = useState({ original: [], filtered: [] });
	const [sortName, setName] = useState("");
	const loaded = false;

	// Generates employees upon first page load
	useEffect(() => {
		generateEmployees();
	}, [loaded]);

	// Generates employees from API call and reassigns data to a new object employeeFields
	const generateEmployees = async () => {
		const { data } = await API.generate()

		const employeeFields = data.results.map((employee, i) => {
			return {
				key: i,
				name: `${employee.name.first} ${employee.name.last}`,
				phone: employee.phone,
				email: employee.email,
				DOB: employee.dob.date,
				image: employee.picture.thumbnail
			}
		})
		setEmployees({ original: employeeFields, filtered: employeeFields })
	};

	// Filters the directory by the employee name or phone number entered into searchbar 
	const filterSearch = event => {

		let filtered = employees.original.filter(item => item.name.toLowerCase().includes(event.target.value) || item.phone.includes(event.target.value));

		setEmployees({ ...employees, filtered });
	}

	// Sorts employees by name when the name column is clicked
	const sortByName = () => {
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
		if (sortName === "DESC") {
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
						key={employee.key}
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
