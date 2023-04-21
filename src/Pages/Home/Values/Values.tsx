
import valuesImage from "Assets/Images/values.jpg"
import Card from "Components UI/Card/Card"
import SectionHeader from "Components UI/SectionHeader/SectionHeader"
import { values } from "data.js"
import { GiCutDiamond } from "react-icons/gi"

import s from "./_Values.module.scss"




const Values = () => {
    return (
        <section className={s.values}>
            <div className={s.values_left}><img className={s.image} src={valuesImage} alt="" /></div>
            <div className={s.values_right}>
                <SectionHeader icon={<GiCutDiamond />} title={"Our Values"} />
                <p className={s.text}>Lorem ipsum officia facere placeat rerum. Voluptatem voluptate unde tenetur sint velit exercitationem deleniti itaque maxime quis? Sapiente.</p>
                <div className={s.wrapper}>
                    {
                        values.map(value => <Card className={s.value_card} key={value.id} >
                            <span className={s.icon}>{value.icon}</span>
                            <h4 className={s.title}>{value.title}</h4>
                            <p className={s.desc}>{value.desc}</p>
                        </Card>)
                    }
                </div>
            </div>
        </section >
    )
}

export default Values