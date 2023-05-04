export const combineImages = (images, thumbnails) => {
  return images.map((image, index) => {
    return {
      src: image,
      thumbnailSrc: thumbnails[index],
    };
  });
};
