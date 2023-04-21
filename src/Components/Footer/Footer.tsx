import Logo from "Assets/Images/logo.png"
import { links } from "data"
import { trainers } from "data"
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

import s from "./_Footer.module.scss"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.column}>
          <Link to="/" className={s.logo_wrapper}>
            <img className={s.logo_image} src={Logo} alt="" />
            <span className={s.logo_text}>BODYcult</span>
          </Link>
          <p className={s.address}>
            UAB „BODYcult“ įregistruota juridinių asmenų registre. <br />
            Adresas: Olimpiečių g. 205-1, Vilnius, LT-09239. <br />
            Įm. kodas: 121740752
          </p>
          <div className={s.social_links}>
            <a href="https://twitter.com" className={s.link}><FaTwitter /></a>
            <a href="https://facebook.com" className={s.link}><FaFacebook /></a>
            <a href="https://linkedin.com" className={s.link}><FaLinkedinIn /></a>
          </div>
        </div>
        <div className={s.column}>
          <h4 className={s.column_title}>Pages</h4>
          {links.map(({ name, path },index) => <Link to={path} key={index} className={s.column_link}>{name}</Link>)}
        </div>
        <div className={s.column}>
          <h4 className={s.column_title}>Insights</h4>
          <Link to="/" className={s.column_link}>Blog</Link>
          <Link to="/" className={s.column_link}>Events</Link>
          <Link to="/" className={s.column_link}>Communities</Link>
          <Link to="/" className={s.column_link}>Case Studies</Link>
          <Link to="/" className={s.column_link}>FAQs</Link>
        </div>
        <div className={s.column}>
          <h4 className={s.column_title}>Trainers</h4>
          {trainers.map(({ job },index) => <Link to="/" key={index} className={s.column_link}>{job}</Link>)}
        </div>
      </div>
      <small>© Developed by Me.</small>
    </footer>
  )
}

export default Footer