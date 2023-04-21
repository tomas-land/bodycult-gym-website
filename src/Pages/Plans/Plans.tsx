import HeaderImage from "Assets/Images/header_bg_3.jpg"
import Card from "Components UI/Card/Card"
import PageHeader from "Components/PageHeader/PageHeader"
import { plans } from "data"
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs"

import s from "./_Plans.module.scss"

const Plans = () => {
  return (
    <div className={s.plans_page}>
      <PageHeader title={"Plans"} image={HeaderImage} >
        Lorem ipsum dolor sit  dolorum earum vel illo assumenda exercitationem deleniti natus consequatur officia repellendus?
      </PageHeader>
      <section className={s.grid}>
        {plans.map(({ id, name, desc, price, features }) => {
          return <Card key={id} className={s.plans_card}>
            <h2 className={s.name}>{name}</h2>
            <p className={s.desc}>{desc}</p>
            <h1 className={s.price}>{price}<span>&euro;/month</span></h1>
            <ul className={s.features_list}>
              {features.map(({feature,available}, index) => {
                return <li className={s.feature} key={index}><span>{feature}</span>
                  <span>
                    {available ? <BsCheckCircleFill className={s.available} /> : <BsXCircleFill className={s.not_available} />}
                  </span></li>
              })}
            </ul>
            <button className={s.btn}>Choose plan</button>
          </Card>
        })}
      </section>
    </div>
  )
}

export default Plans