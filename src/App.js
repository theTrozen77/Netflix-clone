import "./App.css";
import React from "react";
import Dashboard from "./Scenes/Dashboard";
import { Route } from "react-router-dom";
import MainRoutes from "./Scenes/routes";
function App() {
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
