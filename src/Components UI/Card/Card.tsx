
import s from "./_Card.module.scss"


interface IProps {
  children: any;
  className: string;
 
}

const Card = ({ className, children }: IProps) => {

  return (
    <article className={`${s.card} ${className}`}>
      {children}
    </article>
  )
}

export default Card