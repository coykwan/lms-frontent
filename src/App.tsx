import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export default function App() {
  return (
    <div>
      <h1>hello world</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/admin/courses">Courses</Link> |{" "}
      </nav>
    </div>
  );
}
