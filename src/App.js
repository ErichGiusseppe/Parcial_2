import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginWindow from "./componenets/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from "./componenets/cards";
function App() {
  return (
    <div className="App">
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="anonymous"
      ></script>

      <BrowserRouter>
        <Routes>
          <Route path="/cafes" element={<Principal />} />
          <Route path="/login" element={<LoginWindow />} />
          <Route path="/" element={<LoginWindow to="/login" />} />
        </Routes>
      </BrowserRouter>
      <div className="mt-5"></div>
      <footer>
        <div>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</div>
      </footer>
    </div>
    
  );
}
//<Route path="/books" element={<Principal />} />

export default App;
