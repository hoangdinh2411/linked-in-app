import AuthLayout from "components/shared/layouts/AuthLayout";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import { APP_ROUTER } from "../utils/constants";
import PrivateRouter from "./privateRouter";
const Routing = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={APP_ROUTER.INDEX} element={<PrivateRouter />}>
          <Route index element={<Feed />} />
          <Route path={APP_ROUTER.MY_NETWORK} element={<h1>Network</h1> }/>
          <Route path={APP_ROUTER.JOBS} element={<Feed />} />
          <Route path={APP_ROUTER.MESSAGING} element={<Feed />} />
          <Route path={APP_ROUTER.NOTIFICATION} element={<Feed />} />
          <Route path={APP_ROUTER.PROFILE} element={<Feed />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index path={APP_ROUTER.LOGIN} element={<Login />} />
          <Route path={APP_ROUTER.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
