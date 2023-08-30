import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (index, event) => {
    const fields = [...inputFields];
    fields[index][event.target.name] = event.target.value;
    setInputFields([...fields]);
  };

  const handleAddFields = () => {
    const newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => (
          <div key={index}>
            <input
              name="name"
              placeholder="name"
              value={input.name}
              onChange={(event) => handleFormChange(index, event)}
            />
            <input
              name="age"
              placeholder="age"
              value={input.age}
              onChange={(event) => handleFormChange(index, event)}
            />
          </div>
        ))}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button onClick={handleAddFields}>Add More..</button>
    </div>
  );
}
