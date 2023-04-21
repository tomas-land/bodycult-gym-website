import HeaderImage from "Assets/Images/header_bg_1.jpg"
import PageHeader from "Components/PageHeader/PageHeader"

import s from "./_About.module.scss"
import OurMission from "./OurMission/OurMission"
import OurStory from "./OurStory/OurStory"
import OurVision from "./OurVision/OurVision"


const About = () => {
  return (
    <div className={s.about_page}>
      <PageHeader title={"About us"} image={HeaderImage} >
        Lorem ipsum dolor sit  dolorum earum vel illo assumenda exercitationem deleniti natus consequatur officia repellendus?
      </PageHeader>
      <OurStory />
      <OurMission />
      <OurVision />
    </div>
  )
}

export default About