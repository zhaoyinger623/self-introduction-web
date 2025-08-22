import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routerConfig";

const AppRouter: React.FC = () => {
  return <Suspense fallback={<div></div>}>{useRoutes(routes)}</Suspense>;
};

export default AppRouter;
