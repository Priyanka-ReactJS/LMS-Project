import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withRequiredAuth = (ComposedComponent) => {

  return (props) => {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

    if (!isAuthenticated) return <Redirect to='/login' />

    return <ComposedComponent {...props} />
  }

}

export default withRequiredAuth; 