import React, { useState } from 'react';
import Header from './components/Header/Header';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import TableRows from "./components/TableRows/TableRows";
import SearchBar from './components/SearchBar/SearchBar';
import './index.css';
import tempData from "../src/temp.json";

function App() {

	const [employees, setEmployees] = useState(tempData);

	// setEmployees(employees);

	return (
		<>
			<Header />
			<SearchBar />
			<EmployeeTable>
				{employees.map(person => <TableRows
					id={person.id}
					key={person.id}
					image={person.image}
					name={person.name}
					phone={person.phone}
					email={person.email}
					DOB={person.DOB} />)}
			</EmployeeTable>
		</>
	);
}

export default App;
