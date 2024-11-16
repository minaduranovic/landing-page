import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Routes, Route, useNavigate, Navigate } from "react-router-dom";


function App() {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  const SECTIONS = [
    { id: 0, name: "Home" , path: "/"},
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Details", path: "/details" },
    { id: 3, name: "Contact us" , path: "/contact-us"},
  ];

  const handleClickSection = (sectionId, path) => {
    setActiveSection(sectionId);
    navigate(path);
  }

  return (
    <>
      <div className="navbar">
        {SECTIONS.map((section) => (
          <div key={section.id} className={`navbar-item ${activeSection == section.id ? `active` : ''}`}
           onClick={()=> handleClickSection(section.id, section.path)}>
            {section.name}
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/details" element={<h1>Details</h1>} />
        <Route path="/contact-us" element={<h1>Contact us</h1>} />
        <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
    </>
  );
}
export default App;
