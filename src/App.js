import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import TableRows from "./components/TableRows/TableRows";
import API from "./utils/API";
import './index.css';

function App() {

	// Setting up states with Hooks
	const [employees, setEmployees] = useState({ original: [], filtered: [] });
	const [sortName, setName] = useState("");
	const [sortPhone, setPhone] = useState("");
	const [sortEmail, setEmail] = useState("");
	const [sortDOB, setDOB] = useState("");

	// Dependencies
	let moment = require("moment");

	// Generates employees upon first page load
	useEffect(() => {
		generateEmployees();
	}, []);

	// Generates employees from API call and reassigns data to a new object employeeFields
	const generateEmployees = async () => {
		const { data } = await API.generate()

		const employeeFields = data.results.map((employee, i) => {
			return {
				key: i,
				name: `${employee.name.first} ${employee.name.last}`,
				phone: employee.phone,
				email: employee.email,
				DOB: moment(employee.dob.date).format('MM / DD'),
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
	
	// Sorts employees by phone # when the phone column is clicked
	const sortByPhone = () => {
		let sortedPhone = employees.filtered.sort((a, b) => {
			const phoneA = a.phone;
			const phoneB = b.phone;

			let comparison = 0;
			if (phoneA > phoneB) {
				comparison = 1;
			} else if (phoneA < phoneB) {
				comparison = -1;
			}
			return comparison;
		})

		// Switches between sorting names by ascending and descending order
		if (sortPhone === "DESC") {
			sortedPhone.reverse();
			setPhone("ASC");
		} else {
			setPhone("DESC");
		}

		setEmployees({ ...employees, sortedPhone });
	}

	const sortByEmail = () => {
		let sortedEmail = employees.filtered.sort((a, b) => {
			const emailA = a.email;
			const emailB = b.email;

			let comparison = 0;
			if (emailA > emailB) {
				comparison = 1;
			} else if (emailA < emailB) {
				comparison = -1;
			}
			return comparison;
		})

		// Switches between sorting phone #s by ascending and descending order
		if (sortEmail === "DESC") {
			sortedEmail.reverse();
			setEmail("ASC");
		} else {
			setEmail("DESC");
		}

		setEmployees({ ...employees, sortedEmail });
	}

	// Sorts employees by DOB when the DOB column is clicked
	const sortByDOB = () => {
		let sortedDOB = employees.filtered.sort((a, b) => {
			const dobA = a.DOB;
			const dobB = b.DOB;

			let comparison = 0;
			if (dobA > dobB) {
				comparison = 1;
			} else if (dobA < dobB) {
				comparison = -1;
			}
			return comparison;
		})

		// Switches between sorting DOB by ascending and descending order
		if (sortDOB === "DESC") {
			sortedDOB.reverse();
			setDOB("ASC");
		} else {
			setDOB("DESC");
		}

		setEmployees({ ...employees, sortedDOB });
	}

	return (
		<>
			<Header />
			<SearchBar filterSearch={filterSearch} />
			<EmployeeTable sortByName={sortByName} sortByPhone={sortByPhone} sortByDOB={sortByEmail} sortByEmail={sortByDOB}>
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
