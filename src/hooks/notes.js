const [images, setImages] = useState([]);

useEffect(() => {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const images = importAll(
    require.context("../assets/images/grid", false, /\.(jpe?g)$/)
  );

  setImages(images);

  const horizontalImages = [];
  const verticalImages = [];

  const data = images.reduce((acc, img, index) => {
    const imgObj = new Image();
    imgObj.src = img;
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

    return [...acc, item];
  }, []);

  const gridLayout = [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1];

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
          }
        }
      } else {
        if (verticalIndex < verticalImages.length) {
          image = verticalImages[verticalIndex++];
        } else {
          if (indexWithoutAppropriateProportion === undefined) {
            indexWithoutAppropriateProportion = sortedImages.length;
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
}, []);
