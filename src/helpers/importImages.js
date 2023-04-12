import webpSupported from "./webpSupport";

const importAll = (r) => {
  return r.keys().map(r);
};

export function importAnimals() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../assets/webpimages/galleries/zwierzeta-images/`,
        false,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/webpimages/galleries/zwierzeta-images-thumbnails/`,
        false,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../assets/images/galleries/zwierzeta-images`,
        false,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/images/galleries/zwierzeta-images-thumbnails`,
        false,
        /\.(jpe?g)$/
      )
    );
  }

  return { images, thumbnailImages };
}

export function importStudio() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../assets/webpimages/galleries/studio-images/`,
        false,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/webpimages/galleries/studio-images-thumbnails/`,
        false,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../assets/images/galleries/studio-images`,
        false,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/images/galleries/studio-images-thumbnails`,
        false,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}

export function importOutdoors() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../assets/webpimages/galleries/plener-images/`,
        false,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/webpimages/galleries/plener-images-thumbnails/`,
        false,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../assets/images/galleries/plener-images`,
        false,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/images/galleries/plener-images-thumbnails`,
        false,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}

export function importReportage() {
  let images, thumbnailImages;

  if (webpSupported) {
    images = importAll(
      require.context(
        `../assets/webpimages/galleries/reportaz-images/`,
        false,
        /\.(webp)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/webpimages/galleries/reportaz-images-thumbnails/`,
        false,
        /\.(webp)$/
      )
    );
  } else {
    images = importAll(
      require.context(
        `../assets/images/galleries/reportaz-images`,
        false,
        /\.(jpe?g)$/
      )
    );
    thumbnailImages = importAll(
      require.context(
        `../assets/images/galleries/reportaz-images-thumbnails`,
        false,
        /\.(jpe?g)$/
      )
    );
  }
  return { images, thumbnailImages };
}
