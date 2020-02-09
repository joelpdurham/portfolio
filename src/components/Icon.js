import React from 'react';
import PropTypes from 'prop-types';
import styles from '../containers/SideBar.css';

export const Icon = ({ name, url }) => (
  <div className={[styles.tooltip, styles.img].join(' ')}>
    <img style={{ width: 'auto', height: '25px' }} alt={name} src={url} />
    <span className={styles.tooltiptext}>{name}</span>
  </div>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
