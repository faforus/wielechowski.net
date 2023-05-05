import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Gallery.module.css';
import Spinner from '../Spinner';
import Title from '../Title';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';

function Gallery(props) {
  return (
    <Fragment>
      <Modal
        modal={props.modal}
        setModal={props.setModal}
        closeModal={props.closeModal}
        tempImgSrc={props.tempImgSrc}
        setTempImgSrc={props.setTempImgSrc}
        largeImgIsLoading={props.largeImgIsLoading}
        handleLargeImageLoad={props.handleLargeImageLoad}
        handlePrevClick={props.handlePrevClick}
        handleNextClick={props.handleNextClick}
      />
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title={props.category} />
        {props.isLoading && <Spinner />}
        <div style={{ display: props.isLoading ? 'none' : 'block' }} className={classes.container}>
          {props.mappedImgs}
          {props.mappedUnsortedImgs}
        </div>
        <div className={classes['button-container']}>
          {props.link === 'empty' ? (
            ''
          ) : (
            <Link to={props.link}>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                ‹‹‹
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </Fragment>
  );
}

Gallery.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  tempImgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setTempImgSrc: PropTypes.func,
  largeImgIsLoading: PropTypes.bool.isRequired,
  handleLargeImageLoad: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  mappedImgs: PropTypes.arrayOf(PropTypes.element).isRequired,
  mappedUnsortedImgs: PropTypes.arrayOf(PropTypes.element).isRequired,
  link: PropTypes.string.isRequired,
};

export default Gallery;
