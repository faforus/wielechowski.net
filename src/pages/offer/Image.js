import { useState, useEffect } from "react";
import Title from "../../components/Title";
import classes from "./Offer.module.css";
import webpSupported from "../../helpers/webpSupport";

import img1 from "../../assets/images/galleries/studio-images-thumbnails/amadred.jpg";
import img2 from "../../assets/images/galleries/studio-images-thumbnails/aniares.jpg";
import img3 from "../../assets/images/galleries/studio-images-thumbnails/asdasd.jpg";
import img4 from "../../assets/images/galleries/studio-images-thumbnails/asiablue.jpg";
import img5 from "../../assets/images/galleries/studio-images-thumbnails/d1.jpg";
import img6 from "../../assets/images/galleries/studio-images-thumbnails/g1.jpg";
import img7 from "../../assets/images/galleries/studio-images-thumbnails/asiasmall.jpg";
import img8 from "../../assets/images/galleries/studio-images-thumbnails/nadia.jpg";
import img9 from "../../assets/images/galleries/studio-images-thumbnails/parasmini.jpg";
import img10 from "../../assets/images/galleries/studio-images-thumbnails/pat.jpg";

import webpImg1 from "../../assets/webpimages/galleries/studio-images-thumbnails/amadred.webp";
import webpImg2 from "../../assets/webpimages/galleries/studio-images-thumbnails/aniares.webp";
import webpImg3 from "../../assets/webpimages/galleries/studio-images-thumbnails/asdasd.webp";
import webpImg4 from "../../assets/webpimages/galleries/studio-images-thumbnails/asiablue.webp";
import webpImg5 from "../../assets/webpimages/galleries/studio-images-thumbnails/d1.webp";
import webpImg6 from "../../assets/webpimages/galleries/studio-images-thumbnails/g1.webp";
import webpImg7 from "../../assets/webpimages/galleries/studio-images-thumbnails/asiasmall.webp";
import webpImg8 from "../../assets/webpimages/galleries/studio-images-thumbnails/nadia.webp";
import webpImg9 from "../../assets/webpimages/galleries/studio-images-thumbnails/parasmini.webp";
import webpImg10 from "../../assets/webpimages/galleries/studio-images-thumbnails/pat.webp";

const Image = () => {
  const [currentImage, setCurrentImage] = useState([]);
  const [mappedImages, setMappedImages] = useState([]);

  useEffect(() => {
    let images;
    if (webpSupported) {
      images = [
        webpImg1,
        webpImg2,
        webpImg3,
        webpImg4,
        webpImg5,
        webpImg6,
        webpImg7,
        webpImg8,
        webpImg9,
        webpImg10,
      ];
    } else {
      images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    }
    const mappedImages = images.map((img, index) => {
      return (
        <img
          onClick={() => {
            setCurrentImage(mappedImages[index]);
          }}
          src={img}
          alt={img
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")}
          key={index}
        />
      );
    });
    setMappedImages(mappedImages);
    setCurrentImage(mappedImages[0]);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Title title="portret biznesowy / sesja biznesowa / korporacyjna" />
      <div className={classes.main}>
        <div className={classes["main-container"]}>
          <div className={classes["main-left"]}>
            <p>Zdjęcia w plenerze lub w studiu.</p>
            <p>Idealne na media społecznościowe, stronę www lub do CV</p>
            <p>Zdjęcia są poddawane profesjonalnemu retuszowi*</p>
            <p>Wysoka rozdzielczość zdjęć**</p>
          </div>
          <div className={classes["main-right"]}>
            <div className={classes["mini-gallery"]}>
              <div className={classes["mini-gallery-left"]}>{currentImage}</div>
              <div className={classes["mini-gallery-right"]}>
                {mappedImages}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.squares}>
        <div className={classes.square}>
          <p>3 zdjęcia</p>
          <p>250 zł</p>
        </div>
        <div className={classes.square}>
          <p>5 zdjęć</p>
          <p>350 zł</p>
        </div>
        <div className={classes.square}>
          <p>7 zdjęć</p>
          <p>400 zł</p>
        </div>
        <div className={classes.square}>
          <p>8+ zdjęć</p>
          <p>do uzgodnienia</p>
        </div>
      </div>
      <div className={classes["additional-info"]}>
        <p>
          * podstawowy retusz to korekta cery, oczu, sylwetki oraz lekkie
          wybielanie zębów. Na życzenie klienta można wykonać bardziej
          zaawansowany retusz.
        </p>
        <p>** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
        <p>*** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.</p>
      </div>
    </div>
  );
};

export default Image;
