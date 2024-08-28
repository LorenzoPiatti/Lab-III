import React from 'react';
import Table from './components/table/Table';
import './App.css';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const totalIncome = netIncomes.reduce((total, company) => total + company.income, 0);
  const averageIncome = Math.round(totalIncome / netIncomes.length);

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>El promedio de ingreso neto es: {averageIncome}</p>
    </div>
  );
};

export default App;