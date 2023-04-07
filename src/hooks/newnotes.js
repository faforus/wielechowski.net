import React, { useEffect, useState } from "react";
import classes from "./HomeGrid.module.css";
function Home() {
  const [sortedImages, setSortedImages] = useState([]);
  const [mappedImgs, setMappedImgs] = useState([]);
  const [unsortedImages, setUnsortedImages] = useState([]);
  const [mappedUnsortedImgs, setMappedUnsortedImgs] = useState([]);
  const [images, setImages] = useState([]); //////////////////////////////////////////////////////////
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [
    indexWithoutAppropriateProportionState,
    setIndexWithoutAppropriateProportionState,
  ] = useState(undefined);

  const display = () => {
    console.log("apparently that many images loaded - " + loadedImages);
    console.log(
      "actual number of displayed images - " +
        mappedImgs.length +
        mappedUnsortedImgs.length +
        " also a lie"
    );
    console.log("real images! " + sortedImages.length);
  };

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };

    const images = importAll(
      require.context("../assets/images/grid", false, /\.(jpe?g)$/)
    );

    setImages(images); //////////////////////////////////////////////////////////////////
    console.log(images);
    const horizontalImages = [];
    const verticalImages = [];
    const data = images.reduce((acc, img, index) => {
      const imgObj = new Image();
      imgObj.src = img;

      // Create a Promise that resolves when the image has loaded
      const imgLoaded = new Promise((resolve) => {
        imgObj.onload = () => {
          resolve(imgObj);
          setLoadedImages((prevCount) => prevCount + 0.5);
        };
      });
      // Wait for the Promise to resolve
      async function getImage() {
        await imgLoaded;
        const isHorizontal = imgObj.width > imgObj.height;
        const item = {
          id: index + 1,
          imgSrc: img,
          isHorizontal: isHorizontal,
        };

        if (isHorizontal) {
          horizontalImages.push(item);
        } else {
          verticalImages.push(item);
        }

        return item;
      }

      return acc.concat(getImage());
    }, []);

    Promise.all(data).then((images) => {
      const gridLayout = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];

      const sortedImages = [];
      let horizontalIndex = 0;
      let verticalIndex = 0;
      let indexWithoutAppropriateProportion;

      while (sortedImages.length < images.length) {
        for (
          let i = 0;
          i < gridLayout.length && sortedImages.length < images.length;
          i++
        ) {
          const isHorizontal = gridLayout[i] === 1;
          let image;

          if (isHorizontal) {
            if (horizontalIndex < horizontalImages.length) {
              image = horizontalImages[horizontalIndex++];
            } else {
              if (indexWithoutAppropriateProportion === undefined) {
                indexWithoutAppropriateProportion = sortedImages.length;
                setIndexWithoutAppropriateProportionState(sortedImages.length);
              }
            }
          } else {
            if (verticalIndex < verticalImages.length) {
              image = verticalImages[verticalIndex++];
            } else {
              if (indexWithoutAppropriateProportion === undefined) {
                indexWithoutAppropriateProportion = sortedImages.length;
                setIndexWithoutAppropriateProportionState(sortedImages.length);
              }
            }
          }

          if (image) {
            if (indexWithoutAppropriateProportion !== undefined) {
              image.doesNotFit = true;
            }
            sortedImages.push(image);
          }
        }
      }
      setSortedImages(sortedImages);
    });
  }, []);

  useEffect(() => {
    let doesNotFitCount = 0;
    let gridImgs = [];
    let unsortedGridImgs = [];
    let mappedImgs = [];
    let mappedUnsortedImgs = [];

    if (indexWithoutAppropriateProportionState === !undefined) {
      const sliceIndex =
        Math.ceil(indexWithoutAppropriateProportionState / 14) * 14;

      const unsortedImages = sortedImages.splice(sliceIndex);

      let isHorizontal = false;
      if (unsortedImages.length > 0 && unsortedImages[0].isHorizontal) {
        isHorizontal = true;
      }

      const gridClass = isHorizontal
        ? classes["horizontal-image-proportions"]
        : classes["vertical-image-proportions"];

      unsortedImages.forEach((item, index) => {
        unsortedGridImgs.push(
          <div key={index} className={[gridClass]}>
            <img
              src={item.imgSrc}
              alt="gallery"
              // style={{ gridRow: "span 1", gridColumn: "span 1" }}
            />
          </div>
        );
        if ((index + 1) % 12 === 0 || index === unsortedImages.length - 1) {
          const isLastGrid = index === unsortedImages.length - 1;
          const numOfImgsInGrid = isLastGrid ? unsortedGridImgs.length : 12;
          const gridClass = isHorizontal
            ? classes["grid-horizontal"]
            : classes["grid-vertical"];

          mappedUnsortedImgs.push(
            <div className={gridClass} key={`grid-${index}`}>
              {unsortedGridImgs.slice(0, numOfImgsInGrid)}
            </div>
          );
          unsortedGridImgs = [];
        }
      });
    }

    sortedImages.forEach((item, index) => {
      // if (item.doesNotFit) {
      //   doesNotFitCount++;
      //   gridImgs.push(
      //     <img
      //       src={item.imgSrc}
      //       alt="gallery"
      //       key={index}
      //       // style={{ gridRow: "span 1", gridColumn: "span 1" }}
      //     />
      //   );
      // } else
      gridImgs.push(
        <div key={index} className={classes["horizontal-image-proportions"]}>
          <img src={item.imgSrc} alt="gallery" />
        </div>
      );

      if (
        ((index + 1) % 14 === 0 && doesNotFitCount === 0) ||
        index === sortedImages.length - 1
      ) {
        const isLastGrid = index === sortedImages.length - 1;
        const numOfImgsInGrid = isLastGrid ? gridImgs.length : 14;

        mappedImgs.push(
          <div className={classes.grid} key={`grid-${index}`}>
            {gridImgs.slice(0, numOfImgsInGrid)}
          </div>
        );
        gridImgs = [];
        doesNotFitCount = 0;
      }
    });
    if (loadedImages !== 0 && loadedImages === sortedImages.length)
      setIsLoading(false);
    setUnsortedImages(unsortedImages);
    setMappedUnsortedImgs(mappedUnsortedImgs);
    setMappedImgs(mappedImgs);
  }, [sortedImages]);

  return (
    <div className={classes.container}>
      <button onClick={display}>click me</button>
      {isLoading ? <p> llala </p> : <p> dick</p>}
      {mappedImgs}
      {mappedUnsortedImgs}
    </div>
  );
}

export default Home;

// import classes from "./HomeGrid.module.css";

// const importAll = (r) => {
//   return r.keys().map(r);
// };

// const images = importAll(
//   require.context("../assets/images/grid", false, /\.(jpe?g)$/)
// );

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );

// const data = images.map((img, index) => {
//   const imgObj = new Image();
//   imgObj.src = img;
//   const isHorizontal = imgObj.width > imgObj.height;
//   return {
//     id: index + 1,
//     imgSrc: img,
//     thumbnailImgSrc: thumbnailImages[index],
//     isHorizontal: isHorizontal,
//   };
// });

// const mappedImgs = [];
// let gridImgs = [];

// data.forEach((item, index) => {
//   gridImgs.push(<img src={item.thumbnailImgSrc} alt="plener" key={index} />);

//   if ((index + 1) % 14 === 0 || index === data.length - 1) {
//     // create a new grid div for every 14 elements or if it's the last element
//     mappedImgs.push(
//       <div className={classes.grid} key={`grid-${index}`}>
//         {gridImgs}
//       </div>
//     );
//     gridImgs = []; // reset the gridImgs array
//   }
// });

// const Home = () => {
//   return <div className={classes.container}>{mappedImgs}</div>;
// };

// export default Home;

// import { useState, useEffect } from "react";
// import classes from "./Home.module.css";
// import top from "../assets/images/top.jpg";
// import bottom from "../assets/images/bottom.jpg";
// import topSmall from "../assets/images/topsmall.jpg";
// import bottomSmall from "../assets/images/bottomsmall.jpg";

// const Home = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={classes["img-container"]}>
//       <img
//         className={classes["img-top"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? top : topSmall}`}
//       />
//       <div className={classes.stripe}>
//         F<span className={classes.smaller}>ILIP&nbsp;</span> W
//         <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
//         <span className={classes.smaller}>OTOGRAFIA</span>
//       </div>
//       <img
//         className={classes["img-bottom"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? bottom : bottomSmall}`}
//       />
//     </div>
//   );
// };

// export default Home;

// import classes from "./HomeGrid.module.css";

// const importAll = (r) => {
//   return r.keys().map(r);
// };

// const images = importAll(
//   require.context("../assets/images/grid", false, /\.(jpe?g)$/)
// );

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );

// const data = images.map((img, index) => {
//   const imgObj = new Image();
//   imgObj.src = img;
//   const isHorizontal = imgObj.width > imgObj.height;
//   return {
//     id: index + 1,
//     imgSrc: img,
//     thumbnailImgSrc: thumbnailImages[index],
//     isHorizontal: isHorizontal,
//   };
// });

// const mappedImgs = [];
// let gridImgs = [];

// data.forEach((item, index) => {
//   gridImgs.push(<img src={item.thumbnailImgSrc} alt="plener" key={index} />);

//   if ((index + 1) % 14 === 0 || index === data.length - 1) {
//     // create a new grid div for every 14 elements or if it's the last element
//     mappedImgs.push(
//       <div className={classes.grid} key={`grid-${index}`}>
//         {gridImgs}
//       </div>
//     );
//     gridImgs = []; // reset the gridImgs array
//   }
// });

// const Home = () => {
//   return <div className={classes.container}>{mappedImgs}</div>;
// };

// export default Home;

// import { useState, useEffect } from "react";
// import classes from "./Home.module.css";
// import top from "../assets/images/top.jpg";
// import bottom from "../assets/images/bottom.jpg";
// import topSmall from "../assets/images/topsmall.jpg";
// import bottomSmall from "../assets/images/bottomsmall.jpg";

// const Home = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className={classes["img-container"]}>
//       <img
//         className={classes["img-top"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? top : topSmall}`}
//       />
//       <div className={classes.stripe}>
//         F<span className={classes.smaller}>ILIP&nbsp;</span> W
//         <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
//         <span className={classes.smaller}>OTOGRAFIA</span>
//       </div>
//       <img
//         className={classes["img-bottom"]}
//         alt="Filip Wielechowski Fotografia"
//         src={windowWidth > 500 ? bottom : bottomSmall}`}
//       />
//     </div>
//   );
// };

// export default Home;

// const thumbnailImages = importAll(
//   require.context(
//     "../assets/images/grid/images-thumbnails",
//     false,
//     /\.(jpe?g)$/
//   )
// );
