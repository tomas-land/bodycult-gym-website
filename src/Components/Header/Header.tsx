import { useEffect } from "react"

import logo from "Assets/Images/logo.png"
import { useGlobalContext } from "context"
import { links } from "data"
import { FaBars, FaTimes } from "react-icons/fa"
import { NavLink, Link } from "react-router-dom"

import s from "./_Header.module.scss"




const Header = () => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalContext()

    const toggleMenu = () => {
        setMenuIsOpen((prev: boolean) => !prev)
    }
    // hide mobile menu on scroll down
    const listenToScroll = () => {
        let heightToHideFrom = 700;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            menuIsOpen && setMenuIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    })

    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <Link to="/" className={s.logo_wrapper} onClick={() => setMenuIsOpen(false)}>
                    <img className={s.logo_image} src={logo} alt="" />
                    <span className={s.logo_text}>BODYcult</span>
                </Link>
                <ul className={`${s.nav_list} ${menuIsOpen ? s.open_nav : s.close_nav}`}>
                    {links.map((link: any, index) => {
                        return <li key={index} className={s.list_item}>
                            <NavLink onClick={() => setMenuIsOpen(false)} className={({ isActive }: any) => isActive ? s.active : s.link} to={link.path}>{link.name} </NavLink>
                        </li>
                    })}
                </ul>
                <button className={s.menu_toggle} onClick={toggleMenu} >{menuIsOpen ? <FaTimes /> : <FaBars />}</button>
            </div>
        </header>
        //BEM
        // <header className={styles.header}>
        //     <div className={styles.header__container}>
        //         <div className={styles.header__logo_wrapper}>
        //             <img className={styles.header__logo_image} src={logo} alt="" />
        //             <span className={styles.header__logo_text}>BODYcult</span>
        //         </div>
        //         <div className={styles.header__nav}>
        //             <ul className={styles.header__nav_list}>
        //                 {links.map((link: any, index) => {
        //                     return <li className={styles.header__list_item} key={index}>
        //                         <NavLink className={({ isActive }: any) => isActive ? styles['header__nav_link--active'] : styles['header__nav_link']} to={link.path}>{link.name} </NavLink></li>
        //                 })}
        //             </ul>
        //             <button className={styles.header__nav_toggle} onClick={openMenu} >{menuIsOpen ? <FaTimes /> : <FaBars />}</button>
        //         </div>
        //     </div>
        // </header>
    )
}

export default Header