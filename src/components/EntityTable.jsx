// client/src/components/EntityTable.jsx

import React from "react";

const EntityTable = ({ data, columns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => (
              <td key={index}>{item[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntityTable;
