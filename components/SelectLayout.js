import { useState } from "react";

const SelectLayout = ({ gridChange }) => {
  const [selection, setSelection] = useState("List");

  const handleClick = (select) => {
    setSelection(select);
    gridChange(select === "Grid");
  };
  return (
    <div className="layout-select">
      <div className="actual-layout">
        {selection} <div className="arrow"></div>
      </div>
      <div className="options">
        <button onClick={() => handleClick("List")}>List</button>
        <button onClick={() => handleClick("Grid")}>Grid</button>
      </div>
    </div>
  );
};

export default SelectLayout;
