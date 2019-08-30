import React from 'react';
import PropTypes from 'prop-types';

const MyLists = props => {
  return <div className={props.className}>MyLists</div>;
};

MyLists.propTypes = {
  className: PropTypes.string
};

export default MyLists;
