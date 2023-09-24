import info from '../data/info.json';

const FAQ = () => {
  return (
    <div className="FAQ_container">
      <h2>Часто задаваемые вопросы</h2>
      {info.FAQ?.map((info, i) => (
        <div key={i} className="FAQ">
          <div className="question">Вопрос: {info.question}</div>
          <div className="answer">Ответ: {info.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
