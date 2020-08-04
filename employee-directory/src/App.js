import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import TableRows from "./components/TableRows/TableRows";
import tempData from "../src/temp.json";
import './index.css';

function App() {

	// Setting up Hooks
	const [employees, setEmployees] = useState({original: tempData, filtered: tempData});
	// console.log(employees);

	// Filters the directory by the employee name or phone number entered into searchbar 
	const filterSearch = event => {

		let filtered = employees.original.filter(item => item.name.toLowerCase().includes(event.target.value) || item.phone.includes(event.target.value));

		// console.log(filtered);

		setEmployees({...employees, filtered});
	}

	return (
		<>
			<Header />
			<SearchBar filterSearch={filterSearch}/>
			<EmployeeTable>
				{employees.filtered.map(employee => 
				<TableRows
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
