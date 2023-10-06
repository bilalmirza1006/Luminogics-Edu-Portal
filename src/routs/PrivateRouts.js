import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from './RoutConstant';


function PrivateRouts() {
  const token = localStorage.getItem("token");


  return token ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRouts
