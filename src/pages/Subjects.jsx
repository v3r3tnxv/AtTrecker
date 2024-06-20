import React from "react";
import { Link } from "react-router-dom";

function SubjectsPage() {
  return (
    <main className='container'>
      <h1>Дисциплины</h1>
      <ul>
        <li>
          <Link to={""}>Название дисциплины</Link>
        </li>
      </ul>
    </main>
  );
}

export default SubjectsPage;
