import React, { useState } from "react";
import "./App.css";

// Dynamic Form Component
const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  const [fieldId, setFieldId] = useState(0);

  const addField = (type) => {
    setFields([...fields, { id: fieldId, type }]);
    setFieldId(fieldId + 1);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div>
      <button onClick={() => addField("text")}>Add Text Field</button>
      <button onClick={() => addField("checkbox")}>Add Checkbox</button>
      <button onClick={() => addField("radio")}>Add Radio Button</button>
      <form>
        {fields.map((field) => (
          <div className="form-group" key={field.id} id={`field-${field.id}`}>
            {field.type === "text" && (
              <>
                <label>Text Field {field.id}:</label>
                <input type="text" name={`text-${field.id}`} />
              </>
            )}
            {field.type === "checkbox" && (
              <>
                <label>Checkbox {field.id}:</label>
                <input type="checkbox" name={`checkbox-${field.id}`} />
              </>
            )}
            {field.type === "radio" && (
              <>
                <label>Radio Button {field.id}:</label>
                <input type="radio" name="radio-group" />
              </>
            )}
            <button type="button" onClick={() => removeField(field.id)}>
              Remove
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="info-box">
        <p>
          <strong>Name:</strong> Phaneendra Nikhil
        </p>
        <p>
          <strong>Regd No:</strong> 2100032156
        </p>
        <p>
          <strong>University:</strong> KLU
        </p>
        <p>
          <strong>Faculty Guide:</strong> Pavan Kumar
        </p>
      </div>

      <h1>Dynamic Form Builder</h1>
      <DynamicForm />
    </div>
  );
};

export default App;
