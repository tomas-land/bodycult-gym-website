import HeaderImage from "Assets/Images/header_bg_2.jpg"
import PageHeader from "Components/PageHeader/PageHeader"

import s from "./_Gallery.module.scss"

const Gallery = () => {
  const GalleryImagesTotal = 15;
  const galleryImages = [];
  for (let i = 1; i <= GalleryImagesTotal; i++) {
    galleryImages.push(i);
  }
  return (
    <div className={s.gallery_page}>
      <PageHeader title={"Gallery"} image={HeaderImage} >
        Lorem ipsum dolor sit  dolorum earum vel illo assumenda exercitationem deleniti natus consequatur officia repellendus?
      </PageHeader>
      <section className={s.grid}>
        {galleryImages.map((number, index) => {
          return <img className={s.image} key={index} alt="gym" src={require(`Assets/Images/gallery${number}.jpg`)} />
        })}
      </section>
    </div>
  )
}

export default Gallery