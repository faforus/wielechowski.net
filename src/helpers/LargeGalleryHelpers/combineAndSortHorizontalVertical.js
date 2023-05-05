export const combineAndSortHorizontalVertical = (images, thumbnailImages) => {
  const horizontalImages = [];
  const verticalImages = [];
  thumbnailImages.forEach((img, index) => {
    if (
      img
        .replace(/%20/g, " ")
        .replace("/static/media/", "")
        .replace(/\..*$/, "")[0] === "h"
    ) {
      horizontalImages.push({
        imgSrc: img,
        largeImage: images[index],
        alt: img
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")
          .slice(1),
        isHorizontal:
          img
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")[0] === "h"
            ? true
            : false,
      });
    } else {
      verticalImages.push({
        imgSrc: img,
        largeImage: images[index],
        alt: img
          .replace(/%20/g, " ")
          .replace("/static/media/", "")
          .replace(/\..*$/, "")
          .slice(1),
        isHorizontal:
          img
            .replace(/%20/g, " ")
            .replace("/static/media/", "")
            .replace(/\..*$/, "")[0] === "h"
            ? true
            : false,
      });
    }
  });
  return { horizontalImages, verticalImages };
};
