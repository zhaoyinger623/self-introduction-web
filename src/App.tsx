import React from "react";
import { MotionConfig } from "framer-motion";
import AppRouter from "./router/Router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { easeSilky } from "./motion/config";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/self-introduction-web">
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.72, ease: easeSilky }}
      >
        <AppRouter />
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
