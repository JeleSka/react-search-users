import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log({ isUser });

  if (!isLoading) {
    return (
      <Route {...rest} render={() => {
        return isUser ? children : <Redirect to='/login'></Redirect>
      }}></Route>
    )
  } else {
    return <h1>dupa</h1>
  }

};


export default PrivateRoute;
