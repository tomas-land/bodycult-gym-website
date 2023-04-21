
import React from "react"

import hero_image from "Assets/Images/hero_img.png"
import { Link } from "react-router-dom"

import s from "./_Hero.module.scss"






const Hero = () => { 
    return (
        <section className={s.hero}>
            <div className={s.hero_left}>
                <Link to="/" className={s.link}>#gymForAtlets</Link>
                <h1 className={s.title}>Join The Legends Of The Fitness World</h1>
                <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a distinctio perferendis eveniet quaerat ex ullam porro, quia provident, velit enim consectetur. At, nemo ipsa.</p>
                <div className={s.btn_wrapper}>
                    <Link to="/plans" className={s.btn}>Get Started</Link>
                </div>
            </div>
            <div className={s.hero_right}>

                <div className={s.circle}>
                    <img className={s.image} src={hero_image} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Hero