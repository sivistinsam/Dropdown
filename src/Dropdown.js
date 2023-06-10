import React, { useState } from "react";
import "./dropdown.css";

export default function Dropdown() {
  //Creating variables and setting initially false so that when it will be true then it will display the dropdown itesm
  const [isOpen, setIsOpen] = useState(false);
  //Creating array to store the all the elements to display under the dropdown lists
  const array = ["Yes", "Probably not"];

  return (
    <div className="main">
      {/* Creating Heading */}
      <h1>Drop Down Menu</h1>
      {/* Creating Div & inside div I Used onMouseEnter & onMouseLeave to set the isOpen as true and false */}
      <div
        className="sub-main"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Creating a button which will act as dropdown menu*/}
        <button className="dropdown-button">
          Select an option{" "}
          <img
            alt="V"
            src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
            height={"10px"}
            width={"10ox"}
          />
        </button>
        {isOpen && (
          <div className="dropdown-items">
            <ul>
              {/* Iterating and displaying the dropdown list which is fetched  by the array */}
              {array.map((item, index) => (
                <li
                  className="list"
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
