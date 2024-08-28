import React from 'react';

const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((company, index) => (
          <tr key={index}>
            <td>{company.brand}</td>
            <td>{company.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;