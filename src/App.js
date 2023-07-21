import React from "react";
import "./App.css";
import Main from "./Layout/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./comp/Hero/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                children={
                  <>
                    <Hero />
                  </>
                }
              />
            }
          />
          <Route path="/shop" element={<Main children={<h1>Shop</h1>} />} />
          <Route path="/about" element={<Main children={<h1>About</h1>} />} />
          <Route
            path="/contact"
            element={<Main children={<h1>contact</h1>} />}
          />
          {/* <Route path="/" element={<h2>Hello</h2>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
