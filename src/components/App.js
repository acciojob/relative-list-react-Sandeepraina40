import React from "react";

const App = () => {
  // List of relatives you’re planning to visit
  const relatives = [
    "Uncle Raj",
    "Aunt Meena",
    "Grandparents",
    "Cousin Rohan",
    "Sister Priya"
  ];

  return (
    <div>
      <h1>My Relatives for Diwali Visit 🎆</h1>

      {/* Ordered list with key as relativeList */}
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li
            key={`relativeListItem${index + 1}`}
          >
            {relative}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
