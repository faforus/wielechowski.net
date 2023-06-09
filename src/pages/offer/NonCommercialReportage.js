import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from '../../components/Title';
import classes from './Offer.module.css';
import webpSupported from '../../helpers/webpSupport';
import HorizontalMiniGallery from '../../components/Gallery_Mini_Horizontal/HorizontalMiniGallery';
import { motion } from 'framer-motion';
import { CUSTOM_MOTION_PROPS } from '../../config/config';

const importAll = (r) => {
  return r.keys().map(r);
};

const NonCommercialReportage = () => {
  let images;
  let thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        '../../assets/webpimages/galleries/reportage/noncorporate/',
        true,
        /\.(webp)$/,
      ),
    );
    thumbnailImages = importAll(
      require.context(
        '../../assets/webpimages/galleries/reportage-thumbnails/noncorporate/',
        true,
        /\.(webp)$/,
      ),
    );
  } else {
    images = importAll(
      require.context('../../assets/images/galleries/reportage/noncorporate/', true, /\.(jpe?g)$/),
    );
    thumbnailImages = importAll(
      require.context(
        '../../assets/images/galleries/reportage-thumbnails/noncorporate/',
        true,
        /\.(jpe?g)$/,
      ),
    );
  }

  const mappedObjectImages = images.map((img, index) => {
    return { id: index + 1, src: thumbnailImages[index], largeImage: img };
  });

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          property='description'
          content='wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny'
        />
        <meta
          property='og:description'
          content='wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny'
        />
        <title>
          Reportaż Okolicznościowy - Wieczory Panieńskie / Kawalerskie / Chrzciny / Urodziny / ...
        </title>
      </Helmet>
      <motion.div {...CUSTOM_MOTION_PROPS} className={classes.wrapper}>
        <Title title='Reportaż Okolicznościowy' />
        <div className={classes.main}>
          <div className={classes['main-container']}>
            <div className={classes['main-left']}>
              <p>Między innymi:</p>
              <p>wieczory panieńskie / kawalerskie</p>
              <p>chrzciny / pierwsza komunia</p>
              <p>zaręczyny</p>
              <p>urodziny / imieniny</p>
            </div>
            <div className={classes['main-right']}>
              <HorizontalMiniGallery images={mappedObjectImages} />
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <p>Ceny od:</p>
          <p className={classes['price-large']}>
            500<span className={classes['price-currency']}> zł</span>
          </p>
        </div>
        <div className={classes.main}>
          <p>
            Cena jest zależna od długości wydarzenia, lokalizacji, ilości zdjęć i rodzaju obróbki.
          </p>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default NonCommercialReportage;
