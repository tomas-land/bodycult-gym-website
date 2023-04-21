import HeaderImage from "Assets/Images/header_bg_5.jpg"
import PageHeader from "Components/PageHeader/PageHeader"
import { AiOutlineMail } from "react-icons/ai"
import { BsMessenger, BsTelephone } from "react-icons/bs"

import s from "./_Contact.module.scss"

const Contact = () => {
  return (
    <div className={s.contact_page}>
      <PageHeader title={"Contact us"} image={HeaderImage} >
        Lorem ipsum dolor sit  dolorum earum vel illo assumenda exercitationem deleniti natus consequatur officia repellendus?
      </PageHeader>
      <section className={s.grid}>
        <a href="mailto:support@bodycult.com" target="_blank" rel="noreferrer noopener"><AiOutlineMail /></a>
        <a href="http://m.me/me" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
        <a href="phone:+37067532865" target="_blank" rel="noreferrer noopener"><BsTelephone /></a>
      </section>
    </div>
  )
}

export default Contact