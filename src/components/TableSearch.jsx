// client/src/components/TableSearch.jsx

import React, { useState } from "react";

const TableSearch = ({ data, columns, selectedItems = [], setSelectedItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e, id) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
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
            <th></th>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems && selectedItems.includes(row[columns[0].field])}
                  onChange={(e) => handleSelectChange(e, row[columns[0].field])}
                />
              </td>
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
