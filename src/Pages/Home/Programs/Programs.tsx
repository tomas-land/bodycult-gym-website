


import Card from "Components UI/Card/Card"
import SectionHeader from "Components UI/SectionHeader/SectionHeader"
import { programs } from "data.js"
import { AiFillCaretRight } from "react-icons/ai"
import { FaCrown } from "react-icons/fa"
import { Link } from "react-router-dom"

import s from "./_Programs.module.scss"






const Programs = () => {
    return (
        <section className={s.programs}>
            <SectionHeader icon={<FaCrown />} title={"Our Programs"} />
            <div className={s.wrapper}>
                {
                    programs.map(program => <Card className={s.program_card} key={program.id} >
                        <span className={s.icon}>{program.icon}</span>
                        <h4 className={s.title}>{program.title}</h4>
                        <p className={s.info}>{program.info}</p>
                        <Link className={s.btn_link} to={program.path}>Read more<AiFillCaretRight /></Link>
                    </Card>)
                }
            </div>
        </section>
    )
}

export default Programs