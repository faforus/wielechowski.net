import React from 'react';
import PropTypes from 'prop-types';
import classes from './Spinner.module.css';

const Spinner = (props) => {
  return (
    <div style={{ maxHeight: props.maxHeight }} className={classes['spinner-container']}>
      <div className={classes.spinner}></div>
    </div>
  );
};

Spinner.propTypes = {
  maxHeight: PropTypes.string.isRequired,
};

export default Spinner;
