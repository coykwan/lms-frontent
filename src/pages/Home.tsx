import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Course } from 'pages/admin/Course';
import { Assessment } from 'pages/admin/Assessment';

export function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Hello Home Route</h2>
      </main>
    );
  }