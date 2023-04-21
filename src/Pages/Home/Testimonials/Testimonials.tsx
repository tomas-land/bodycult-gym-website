import { useState } from "react"

import Card from "Components UI/Card/Card"
import SectionHeader from "Components UI/SectionHeader/SectionHeader"
import { testimonials } from "data"
import { FaQuoteLeft } from "react-icons/fa"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

import s from "./_Testimonials.module.scss"

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { avatar, quote, name, job } = testimonials[index]

  const prevTestimonial = () => {
    setIndex(prev => prev - 1);
    if (index <= 0) { setIndex(testimonials.length - 1) }
  }

  const nextTestimonial = () => {
    setIndex(prev => prev + 1);
    if (index >= testimonials.length - 1) { setIndex(0) }
  }

  return (
    <section className={s.testimonials}>
      <SectionHeader title={"Testimonials"} icon={<FaQuoteLeft />} extraClassName={"centered"} />
      <Card className={s.card}>
        <img src={require(`Assets/Images/${avatar}.jpg`)} className={s.avatar} alt="" />
        <p className={s.quote}>{`"${quote}"`}</p>
        <small className={s.job}>{job}</small>
        <h4 className={s.name}>{name}</h4>
      </Card>
      <div className={s.buttons}>
        <button className={s.left} onClick={prevTestimonial}><IoIosArrowDropleftCircle /></button>
        <button className={s.right} onClick={nextTestimonial}><IoIosArrowDroprightCircle /></button>
      </div>
    </section>
  )
}

export default Testimonials