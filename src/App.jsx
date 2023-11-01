import { useState } from "react";
import { getData } from "./data";

import "./App.css";
const [animals, species] = getData();
function App() {
  const [filterProperty, setFilterProperty] = useState("");
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  let filtered = animals;
  if (filterProperty) {
    filtered = animals.filter((ani) => ani.species === filterProperty);
  }
  function setSortAndFilter(property) {
    //Hvis vi allerede sorterer efter "property" så skal den bare "flippes"
    if (sortColumn === property) {
      setSortDirection((old) => (old === "asc" ? "desc" : "asc"));
    } else {
      //Hvis det er en ny property, så sæt sort til ASC og skift sortColumn
      setSortDirection("asc");
      setSortColumn(property);
    }
  }
  function sortAnimals(a, b) {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    } else {
      return -1;
    }
  }
  filtered.sort(sortAnimals);
  if (sortDirection === "desc") {
    filtered.reverse();
  }

  return (
    <div>
      {species.map((s) => (
        <button onClick={() => setFilterProperty(s)}>{s.toUpperCase()}</button>
      ))}

      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => setSortAndFilter("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => setSortAndFilter("trait")}>Trait</button>
            </th>
            <th>
              <button onClick={() => setSortAndFilter("species")}>Spec</button>
            </th>
            <th>
              <button onClick={() => setSortAndFilter("age")}>Age</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <tr>
              <td>{ani.name}</td>
              <td>{ani.trait}</td>
              <td>{ani.species}</td>
              <td>{ani.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
