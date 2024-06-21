// import React, { useState, useEffect } from "react";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;
