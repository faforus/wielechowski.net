import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';
import classes from './components/WelcomeModal.module.css';
import Header from './layout/Header';
import WelcomeModal from './components/WelcomeModal';
import Footer from './layout/Footer';
import { preloadAppImages } from './helpers/preloadAppImages';

preloadAppImages();

function App() {
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const welcomeElement = document.querySelector(`.${classes.welcome}`);
      welcomeElement.style.opacity = 0;
      setTimeout(() => {
        setLoadedWelcome(true);
      }, 400);
    }, 500);
  }, []);

  return (
    <Fragment>
      {!loadedWelcome &&
        ReactDOM.createPortal(<WelcomeModal />, document.getElementById('welcome'))}
      <div className='container'>
        <BrowserRouter>
          <Header />
          <AnimatedRoutes />
          <Footer className='footer' />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
