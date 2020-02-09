import React from 'react';
import PropTypes from 'prop-types';

export const NavItem = ({ name }) => (<li>{name}</li>);

NavItem.propTypes = {
  name: PropTypes.string.isRequired
};
