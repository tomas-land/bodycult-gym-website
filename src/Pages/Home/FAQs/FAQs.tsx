import SectionHeader from "Components UI/SectionHeader/SectionHeader"
import { faqs } from "data.js"
import { FaQuestion } from "react-icons/fa"

import s from "./_FAQs.module.scss"
import FAQ from "./FAQ/FAQ"




const FAQs = () => {
   
    
    return (
        <section className={s.faqs}>
            <SectionHeader icon={<FaQuestion />} title={"FAQs"} />
            <div className={s.wrapper}>
                {
                    faqs.map(({ id, question, answer }) => {
                        return <FAQ key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </section>
    )
}

export default FAQs