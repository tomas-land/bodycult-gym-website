import s from "./_PageHeader.module.scss"

interface IProps {
  title: string;
  image: string;
  children: string;
}

const PageHeader = ({ title, image, children }: IProps) => {
  return (
    <div className={s.page_header}>
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.border}></div>
          <img src={image} className={s.image} alt="" />
        </div>
        <div className={s.content}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.text}>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader