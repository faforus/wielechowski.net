import React from 'react';
import PropTypes from 'prop-types';
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h2>{props.title}</h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
