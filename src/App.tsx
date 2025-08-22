import React from "react";
import AppRouter from "./router/Router";
import "./App.css";
import { HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

export default App;
