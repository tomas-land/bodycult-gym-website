import HeaderImage from "Assets/Images/header_bg_4.jpg"
import Card from "Components UI/Card/Card"
import PageHeader from "Components/PageHeader/PageHeader"
import { trainers } from "data"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"

import s from "./_Trainers.module.scss"

const Trainers = () => {
  return (
    <div className={s.trainers_page}>
      <PageHeader title={"Trainers"} image={HeaderImage} >
        Lorem ipsum dolor sit  dolorum earum vel illo assumenda exercitationem deleniti natus consequatur officia repellendus?
      </PageHeader>
      <section className={s.grid}>
        {trainers.map(({ id, name, job, image, socials }) => {
          return <Card className={s.trainers_card} key={id}>
            <div className={s.image_wrapper}>
              <img className={s.image} src={require(`Assets/Images/${image}.jpg`)} alt="" />
            </div>
            <h3 className={s.name}>{name}</h3>
            <h4 className={s.job}>{job}</h4>
            <div className={s.socials}>
              <a href={socials[0]}><AiFillInstagram /></a>
              <a href={socials[1]}><AiFillTwitterSquare /></a>
              <a href={socials[2]}><AiFillFacebook /></a>
              <a href={socials[3]}><AiFillLinkedin /></a>
            </div>
          </Card>
        })}
      </section>
    </div>
  )
}

export default Trainers