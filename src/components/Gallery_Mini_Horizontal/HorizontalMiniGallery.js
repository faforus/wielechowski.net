import React, { Fragment, useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classes from './HorizontalMiniGallery.module.css';
import Modal from '../../components/Modal';
import useModal from '../../hooks/use-modal';

const HorizontalMiniGallery = (props) => {
  const myDivRef = useRef(null);
  const [currentImage, setCurrentImage] = useState([]);

  const {
    modal,
    setModal,
    closeModal,
    tempImgSrc,
    setTempImgSrc,
    setCurrentIndex,
    largeImgIsLoading,
    handleLargeImageLoad,
    handlePrevClick,
    handleNextClick,
  } = useModal(props.images);

  const mappedImages = useMemo(() => {
    return props.images.map((img, index) => {
      return (
        <img
          onClick={() => {
            setCurrentImage(
              <img
                onClick={() => {
                  setModal(true);
                  setCurrentIndex(props.images[index].id);
                  setTempImgSrc(props.images[index].largeImage);
                }}
                src={props.images[index].src}
                alt=''
              />,
            );
          }}
          src={img.src}
          alt={img.src.replace(/%20/g, ' ').replace('/static/media/', '').replace(/\..*$/, '')}
          key={index}
        />
      );
    });
  }, [props.images, setCurrentIndex, setModal, setTempImgSrc]);

  useEffect(() => {
    setCurrentImage(mappedImages[0]);
    setCurrentIndex(props.images[0].id);
    setTempImgSrc(props.images[0].largeImage);
  }, [setCurrentImage, setCurrentIndex, setTempImgSrc, props.images, mappedImages]);

  function scroll(direction) {
    if (myDivRef.current) {
      const sign = direction === 'left' ? -1 : 1;
      myDivRef.current.scrollBy({
        left: sign * myDivRef.current.clientWidth * 0.3,
        behavior: 'smooth',
      });
    }
  }

  return (
    <Fragment>
      <Modal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
        setCurrentIndex={setCurrentIndex}
        largeImgIsLoading={largeImgIsLoading}
        handleLargeImageLoad={handleLargeImageLoad}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className={classes['mini-gallery-horizontal']}>
        <div className={classes['mini-gallery-top']}>
          <p
            onClick={() => {
              scroll('left');
            }}
            className={classes.arrowleft}
          >
            ›
          </p>{' '}
          <p
            onClick={() => {
              scroll('right');
            }}
            className={classes.arrowright}
          >
            ›
          </p>
          <div
            onClick={() => {
              setModal(true);
            }}
            style={{ height: '100%' }}
          >
            {currentImage}
          </div>
        </div>
        <div ref={myDivRef} className={classes['mini-gallery-bottom']}>
          {mappedImages}
        </div>
      </div>
    </Fragment>
  );
};

HorizontalMiniGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HorizontalMiniGallery;
