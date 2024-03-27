import css from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, imageUrlFull, title, onModalOpen }) => {
  return (
    <div
      className={css.imgContainer}
    >
      <img  onClick={() => {
        onModalOpen(imageUrlFull, title);
      }} className={css.image} src={imageUrl} alt={title} width="250" />
    </div>
  );
};

export default ImageCard;