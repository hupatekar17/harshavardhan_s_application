import React from "react";
import { useRoutes } from "react-router-dom";

import FullDashboard from "pages/FullDashboard";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <FullDashboard /> }
  
  ]);

  return element;
};

export default ProjectRoutes;
