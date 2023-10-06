import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from './RoutConstant';

function PublicRout() {
  let token = localStorage.token;

  return token ? <Outlet /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PublicRout
