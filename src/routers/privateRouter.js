import MainLayout from "components/shared/layouts/MainLayout";
import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRouter = () => {
  const auth = true;
  return auth ? <MainLayout  /> : <Navigate to="/auth/login" />;
};

export default PrivateRouter;
