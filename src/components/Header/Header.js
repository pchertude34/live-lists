import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';

import './Header.scss';

const Header = props => {
  return (
    <div className="m-b-lg">
      <Toolbar hasBackButton={props.hasBackButton} />
      <div className="header__title">
        <h1 className="heading-primary m-none">{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  hasBackButton: PropTypes.bool
};

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Header);
