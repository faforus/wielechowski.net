import { Fragment } from "react";
import { useState, useEffect } from "react";
import { combineImages } from "../../helpers/combineImages";

const importAll = (r) => {
  return r.keys().map(r);
};

const Test = () => {
  const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoadedImagesCounter((prevCount) => prevCount + 1);
  };

  const images = importAll(
    require.context(
      `../../assets/images/galleries/reportage/`,
      true,
      /\.(jpe?g)$/
    )
  );

  const thumbnailImages = importAll(
    require.context(
      `../../assets/images/galleries/reportage-thumbnails/`,
      true,
      /\.(jpe?g)$/
    )
  );

  const combinedImages = combineImages(images, thumbnailImages).map((image) => {
    return (
      <img
        style={{ width: "500px" }}
        src={image.src}
        onLoad={handleLoad}
        key={image.src}
        alt={image.src
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")}
      />
    );
  });

  useEffect(() => {
    console.log("Comparison use effect.");
    if (loadedImagesCounter === combinedImages.length) {
      setLoading(false);
    }
  }, [loadedImagesCounter, combinedImages.length]);

  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {loading ? <p>Loading</p> : <p>Loaded</p>}
        {combinedImages}
      </div>
    </Fragment>
  );
};

export default Test;
