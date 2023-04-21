import React, { ReactElement } from "react"

import s from "./_SectionHeader.module.scss"

interface IProps{
    title:string;
    icon:ReactElement;
    extraClassName?:string | undefined;
}

const SectionHeader = ({title,icon,extraClassName=""}:IProps) => {
  // const centered = extraClassName;
  return (
    <header className={`${s.section_header} ${s[extraClassName]}`}>
        <span className={s.icon}>{icon}</span>
        <h2 className={s.title}>{title}</h2>
    </header>
  )
}

export default SectionHeader