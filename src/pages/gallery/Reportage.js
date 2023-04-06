import useGallery from "../../hooks/use-gallery";
import Gallery from "./Gallery";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../assets/galleries/reportaz-images", false, /\.(jpe?g)$/)
);

const thumbnailImages = importAll(
  require.context(
    "../../assets/galleries/reportaz-images-thumbnails",
    false,
    /\.(jpe?g)$/
  )
);

let data = images.map((img, index) => ({
  id: index + 1,
  imgSrc: img,
  thumbnailImgSrc: thumbnailImages[index],
}));

data.sort(() => Math.random() - 0.5);

const Reportage = () => {
  const {
    modal,
    setModal,
    closeModal,
    tempImgSrc,
    setTempImgSrc,
    currentIndex,
    setCurrentIndex,
    isLoading,
    setIsLoading,
    largeImgIsLoading,
    setLargeImgIsLoading,
    handleImageLoad,
    largeImageHandler,
    handleLargeImageLoad,
    isSafari,
  } = useGallery(data);

  return (
    <Gallery
      category={"Plener"}
      data={data}
      modal={modal}
      setModal={setModal}
      closeModal={closeModal}
      tempImgSrc={tempImgSrc}
      setTempImgSrc={setTempImgSrc}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      largeImgIsLoading={largeImgIsLoading}
      setLargeImgIsLoading={setLargeImgIsLoading}
      handleImageLoad={handleImageLoad}
      largeImageHandler={largeImageHandler}
      handleLargeImageLoad={handleLargeImageLoad}
      isSafari={isSafari}
    />
  );
};

export default Reportage;
