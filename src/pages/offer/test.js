import { Fragment } from "react";
import { Transition } from "react-transition-group";
////////////////////////////////////////////////////
import { useState, useEffect } from "react";

const importAll = (r) => {
  return r.keys().map(r);
};

const Test = () => {
  const [images, setImages] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [combinedImages, setCombinedImages] = useState([]);
  const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Require context useEffect");
    setImages(
      importAll(
        require.context(
          `../../assets/images/galleries/reportage/`,
          true,
          /\.(jpe?g)$/
        )
      )
    );

    setThumbnailImages(
      importAll(
        require.context(
          `../../assets/images/galleries/reportage-thumbnails/`,
          true,
          /\.(jpe?g)$/
        )
      )
    );
  }, []);

  useEffect(() => {
    console.log("Merging both arrays and rendering useEffect");
    setCombinedImages(
      images
        .map((image, index) => {
          return {
            src: image,
            thumbnailSrc: thumbnailImages[index],
          };
        })
        .sort(() => Math.random() - 0.5)
        .map((image) => {
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
        })
    );
  }, [images, thumbnailImages]);

  const handleLoad = () => {
    setLoadedImagesCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("Comparison use effect.");
    if (loadedImagesCounter === 0) return;
    if (loadedImagesCounter === combinedImages.length) {
      setLoading(false);
    }
  }, [loadedImagesCounter, combinedImages.length]);
  ////////////////////////////////////////////////////////////////
  const [showDiv, setShowDiv] = useState(false);
  const handler = () => {
    setShowDiv((p) => !p);
  };
  ////////////////////////////////////////////////////////////////
  return (
    <Fragment>
      <h1>home</h1>
      <button onClick={handler}>OK</button>
      <Transition
        mountOnEnter
        unmountOnExit
        in={showDiv}
        timeout={1000}
        enter
        appear
      >
        {(state) => (
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "red",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" || state === "exited" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {loading ? <p>Loading</p> : <p>Loaded</p>}
        {combinedImages}
      </div>
    </Fragment>
  );
};

export default Test;
