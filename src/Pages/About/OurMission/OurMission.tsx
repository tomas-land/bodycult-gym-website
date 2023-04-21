import AboutUsImage2 from "Assets/Images/about2.jpg"

import s from "./_OurMission.module.scss"


const OurMission = () => {
  return (
    <section className={s.ourStory}>
      <div className={s.left}>
        <h1 className={s.title}>Our Mission</h1>
        <p className={s.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate deserunt blanditiis ut quia beatae est enim similique consequuntur, rem esse? Explicabo illum optio modi labore voluptas eaque blanditiis quos fugit dolor alias incidunt autem quam, esse obcaecati quod rerum excepturi sit aspernatur mollitia amet. Doloribus nam dolorum suscipit porro quo.</p>
        <p className={s.text}>Deserunt blanditiis  consequuntur, rem esse? Explicabo voluptas eaque blanditiis quos fugit dolor alias incidunt autem quam, esse obcaecati quod rerum excepturi sit aspernatur mollitia amet. Doloribus nam dolorum suscipit porro quo.</p>
      </div>
      <div className={s.right}>
        <img className={s.image} src={AboutUsImage2} alt="" />
      </div>
    </section>
  )
}

export default OurMission
