import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const ArrowButton = React.memo(function ArrowButton({ direction, onClick }) {
  return (
    <button
      className={direction === 'prev' ? classes['prev-button'] : classes['next-button']}
      onClick={onClick}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  );
});

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClick: PropTypes.func.isRequired,
};

const CloseButton = React.memo(function CloseButton({ onClick }) {
  return (
    <span onClick={onClick} className={classes['close-button']}>
      {'×'}
    </span>
  );
});

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Modal = (props) => {
  const {
    modal,
    setModal,
    tempImgSrc,
    setTempImgSrc,
    largeImgIsLoading,
    handleLargeImageLoad,
    handlePrevClick,
    handleNextClick,
  } = props;
  const navigate = useNavigate();

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        timeout = null;
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedHandlePrevClick = debounce(handlePrevClick, 150);
  const debouncedHandleNextClick = debounce(handleNextClick, 150);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 8) {
        navigate('/galeria');
        window.scrollTo(0, 0);
      }
      if (e.keyCode === 37) {
        imgRef.current.style.opacity = '0';
        setTimeout(() => {
          debouncedHandlePrevClick();
        }, 150);
      } else if (e.keyCode === 39) {
        imgRef.current.style.opacity = '0';
        setTimeout(() => {
          debouncedHandleNextClick();
        }, 150);
      } else if (e.keyCode === 27) {
        setModal(false);
        setTempImgSrc('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const imgRef = useRef(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    if (!isMobile) {
      if (modal) {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.width = 'calc(100% - 6px)';
      } else {
        document.documentElement.style.overflowY = 'scroll';
        document.body.style.width = '100%';
      }
    }

    if (modal && isMobile) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll';
      document.body.style.width = '100%';
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [modal]);

  return (
    <div
      className={classNames(classes.modal, {
        [classes.open]: modal,
        [classes['disable-select']]: modal,
      })}
      onClick={() => {
        setModal(false);
        setTimeout(() => {
          setTempImgSrc('');
        }, 150);
      }}
    >
      <CloseButton
        onClick={() => {
          setModal(false);
          setTimeout(() => {
            setTempImgSrc('');
          }, 150);
        }}
      />
      <ArrowButton
        direction='prev'
        onClick={(e) => {
          e.stopPropagation();
          imgRef.current.style.opacity = '0';
          setTimeout(() => {
            debouncedHandlePrevClick();
          }, 150);
        }}
      />
      <ArrowButton
        direction='next'
        onClick={(e) => {
          e.stopPropagation();
          imgRef.current.style.opacity = '0';
          setTimeout(() => {
            debouncedHandleNextClick();
          }, 150);
        }}
      />
      {largeImgIsLoading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      <img
        ref={imgRef}
        key={tempImgSrc}
        alt={tempImgSrc
          .replace(/%20/g, ' ')
          .replace('/static/media/', '')
          .replace(/\..*$/, '')
          .slice(1)}
        src={tempImgSrc}
        onLoad={(e) => {
          e.target.style.opacity = '1';
          handleLargeImageLoad();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  tempImgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setTempImgSrc: PropTypes.func.isRequired,
  largeImgIsLoading: PropTypes.bool.isRequired,
  handleLargeImageLoad: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default Modal;
