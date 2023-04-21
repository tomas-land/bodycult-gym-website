import React from "react"

import FAQs from "./FAQs/FAQs"
import Hero from "./Hero/Hero"
import Programs from "./Programs/Programs"
import Testimonials from "./Testimonials/Testimonials"
import Values from "./Values/Values"


const Home = () => {
    return (
        <>
            <Hero />
            <Programs />
            <Values />
            <FAQs />
            <Testimonials />
        </>
    )
}

export default Home