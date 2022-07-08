import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../useContext';

const ProtectedRouter = ({ children }: any) => {
  const { isLogin } = React.useContext(UserContext);
  return isLogin ? children : <Navigate to="/login" />;
  // return <>{login ? <>{children}</> : <Navigate to="/" />}</>;
};

export default ProtectedRouter;
