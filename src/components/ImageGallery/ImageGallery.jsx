

function ImageGallery({ images = null}) {
  return (
    <ul>{images!== null && Array.isArray(images) && images.map(image => {
        return <li key = {image.id}>
          <img width={250} src={image.urls.small} title={image.alt_description}/>
        </li>
      })}</ul>
  )
}

export default ImageGallery
