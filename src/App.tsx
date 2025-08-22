import React from "react";
import AppRouter from "./router/Router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/self-introduction-web">
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
