import React from 'react';
import Header from './components/Header/Header';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import SearchBar from './components/SearchBar/SearchBar';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <EmployeeTable />
    </>
  );
}

export default App;
