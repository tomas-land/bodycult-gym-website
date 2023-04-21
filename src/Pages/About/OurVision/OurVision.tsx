import AboutUsImage3 from "Assets/Images/about3.jpg"

import s from "./_OurVision.module.scss"

const OurVision = () => {
  return (
    <section className={s.ourVision}>
      <div className={s.left}>
        <img className={s.image} src={AboutUsImage3} alt="" />
      </div>
      <div className={s.right}>
        <h1 className={s.title}>Our Vision</h1>
        <p className={s.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deserunt blanditiis ut quia beatae est enim similique consequuntur, rem esse? Explicabo illum optio modi labore voluptas eaque blanditiis quos fugit dolor alias incidunt autem quam, esse obcaecati quod rerum excepturi sit aspernatur mollitia amet. Doloribus nam dolorum suscipit porro quo.</p>
        <p className={s.text}>Cupiditate modi labore voluptas eaque blanditiis quos fugit dolor alias incidunt autem quam, esse obcaecati quod rerum excepturi sit aspernatur mollitia amet. Doloribus nam dolorum suscipit porro quo.</p>
      </div>

    </section>
  )
}

export default OurVision