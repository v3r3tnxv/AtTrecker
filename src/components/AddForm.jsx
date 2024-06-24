// // client/src/components/AddForm.jsx

// import React, { useState } from "react";
// import Input from "./Input";
// import Select from "./Select";
// import Button from "./Button";

// const AddForm = ({ fields, groups, onSubmit }) => {
//   const initialFormData = Object.fromEntries(fields.map((field) => [field.name, ""]));
//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData(initialFormData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {fields.map((field) => (
//         <Input
//           key={field.name}
//           type="text"
//           id={field.name}
//           value={formData[field.name]}
//           onChange={(e) => handleChange(field.name, e.target.value)}
//           label={field.label}
//           placeholder={field.placeholder}
//         />
//       ))}
//       <Select
//         id="group_id"
//         value={formData["group_id"]}
//         onChange={(e) => handleChange("group_id", e.target.value)}
//         label="Выберите группу"
//         options={groups.map((group) => ({ value: group.group_id, label: group.group_name }))}
//       />
//       <Button type="submit">Добавить</Button>
//     </form>
//   );
// };

// export default AddForm;




// до добавление селекта
import React, { useState } from "react";
import Button from "./Button";

const AddForm = ({ fields, onSubmit }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={formState[field.name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <Button className="button" type="submit">
        Добавить запись
      </Button>
    </form>
  );
};

export default AddForm;
