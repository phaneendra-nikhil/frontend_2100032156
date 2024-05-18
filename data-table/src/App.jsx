import React from "react";
import DataTable from "./DataTable";
import "./App.css";

const App = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 45, email: "michael@example.com" },
    { id: 4, name: "Emily Davis", age: 22, email: "emily@example.com" },
    { id: 5, name: "James Brown", age: 32, email: "james@example.com" },
    { id: 6, name: "Patricia Miller", age: 29, email: "patricia@example.com" },
    { id: 7, name: "Robert Wilson", age: 40, email: "robert@example.com" },
    { id: 8, name: "Linda Moore", age: 36, email: "linda@example.com" },
    { id: 9, name: "William Taylor", age: 50, email: "william@example.com" },
    {
      id: 10,
      name: "Elizabeth Anderson",
      age: 27,
      email: "elizabeth@example.com",
    },
    {
      id: 11,
      name: "Christopher Thomas",
      age: 33,
      email: "christopher@example.com",
    },
    { id: 12, name: "Mary Jackson", age: 42, email: "mary@example.com" },
    { id: 13, name: "Joseph White", age: 35, email: "joseph@example.com" },
    { id: 14, name: "Jennifer Harris", age: 30, email: "jennifer@example.com" },
    { id: 15, name: "Charles Martin", age: 26, email: "charles@example.com" },
  ];

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
      <h1>Interactive Data Table</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;
