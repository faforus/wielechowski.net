const GRID_LAYOUT = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];

export const sortImages = (horizontalImages, verticalImages, data) => {
  let horizontalIndex = 0;
  let verticalIndex = 0;
  let idCounter = 1;
  let newSortedImages = [];
  let isFirstUnfitImage = true;
  let iWAP = undefined;

  while (newSortedImages.length < data.length) {
    for (
      let i = 0;
      i < GRID_LAYOUT.length && newSortedImages.length < data.length;
      i++
    ) {
      const isHorizontal = GRID_LAYOUT[i] === 1;
      let image;
      let imageAvailable = true;

      if (isHorizontal) {
        if (horizontalIndex < horizontalImages.length) {
          image = horizontalImages[horizontalIndex++];
        } else {
          imageAvailable = false;
        }
      } else {
        if (verticalIndex < verticalImages.length) {
          image = verticalImages[verticalIndex++];
        } else {
          imageAvailable = false;
        }
      }

      if (!imageAvailable && isFirstUnfitImage) {
        isFirstUnfitImage = false;
        iWAP = newSortedImages.length;
        // setIndexWithoutAppropriateProportion(newSortedImages.length);
      }

      if (image) {
        image.id = idCounter++;
        newSortedImages.push(image);
      }
    }
  }
  return { newSortedImages, iWAP };
};
