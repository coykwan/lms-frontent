import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home"
import { NavBar } from "pages/NavBar"
import { Course } from "pages/admin/Course"
import { Assessment } from "pages/admin/Assessment"
import { siteMap } from "sitemap";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
            <Route path={siteMap.root} element={<Home />} />
            <Route path={siteMap.admin.course} element={<Course />} />
            <Route path={siteMap.admin.assessment} element={<Assessment />} />
        </Routes>
      </div>
    </> 
  );
}
