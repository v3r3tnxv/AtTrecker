// client/src/components/TableSearch.jsx

import React, { useState } from "react";

const TableSearch = ({ data, columns }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((row) => {
    return columns.some((column) => {
      const value = row[column.field];
      return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  return (
    <div>
      <input type="text" placeholder="Поиск..." value={searchTerm} onChange={handleSearchChange} />
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSearch;
