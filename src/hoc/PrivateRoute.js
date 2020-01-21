import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoaded && !auth.isEmpty) return <Component {...props} />;
        else
          return (
            <Redirect to={{ pathname: '/signin', from: props.location }} />
          );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const auth = state.firebase.auth;
  return { auth };
};

export default connect(mapStateToProps)(PrivateRoute);
