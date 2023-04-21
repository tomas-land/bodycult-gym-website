import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

import s from "./_FAQ.module.scss"





interface IFaq {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: IFaq) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)

  const toggleAnswer = () => {
    setIsAnswerShowing((prev) => !prev)
  }
  return (
    <article className={s.faq} onClick={toggleAnswer}>
      <div className={s.question} >
        <h4 className={s.question_text}>{question}</h4>
        {isAnswerShowing ? <FaMinus /> : <FaPlus />}
      </div>
      <div className={`${s.answer} ${isAnswerShowing && s.show_answer}`} >
        <p className={s.answer_text}>{answer}</p>
      </div>
    </article >
  )
}

export default FAQ