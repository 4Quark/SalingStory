import courses1 from '../assets/courses/courses1.jpeg';
import courses2 from '../assets/courses/courses2.jpeg';
import courses3 from '../assets/courses/courses3.jpeg';
import courses4 from '../assets/courses/courses4.jpeg';
import courses5 from '../assets/courses/courses5.jpeg';

const Courses = () => {
  return (
    <div className="courses_container">
      <h2>Курсы и обучение</h2>
      <section className="courses_promo">
        <div className="courses_promo_item">
          <img className="courses_promo_img" src={courses1} alt="promo image" />
          <div className="courses_promo_span"> Знакомство с парусной яхтой </div>
        </div>
        <div className="courses_promo_item">
          <img className="courses_promo_img" src={courses5} alt="promo image" />
          <div className="courses_promo_span"> Освежить знания</div>
        </div>
        <div className="courses_promo_item">
          <img className="courses_promo_img" src={courses4} alt="promo image" />
          <div className="courses_promo_span"> Теоретический курс</div>
        </div>
        <div className="courses_promo_item">
          <img className="courses_promo_img" src={courses3} alt="promo image" />
          <div className="courses_promo_span"> Практический курс</div>
        </div>
        <div className="courses_promo_item">
          <img className="courses_promo_img" src={courses2} alt="promo image" />
          <div className="courses_promo_span"> Парусный спорт</div>
        </div>
      </section>
      <p>
        Курсы и программы обучения управления парусной яхтой обычно предназначены для тех, кто хочет научиться управлять яхтой и
        получить все необходимые знания для безопасной и эффективной навигации. Начальный уровень курсов обычно включает в себя
        основные техники управления яхтой, безопасность на борту, знание основных узлов, правил навигации и ориентирование на
        море. С продвинутым уровнем курсов, участники углубляются в изучение теории парусной яхты и практические тренировки в
        реальных условиях на открытом море. Обычно, этот уровень курсов включает в себя знание различных типов яхт и парусного
        оборудования, маневрирование в различных погодных условиях, навигацию на дальних расстояниях и получение международных
        сертификатов. Продвинутый уровень обучения может также включать в себя как индивидуальные занятия, так и тренировки в
        команде для улучшения командной работы. Дополнительные курсы могут включать в себя такие темы, как борьба с пиратством и
        реакция на чрезвычайные ситуации. В целом, курсы и программы обучения управлению парусными яхтами предназначены для тех,
        кто хочет научиться управлять яхтой как хобби или профессионально. Они обеспечивают полное ознакомление со всеми аспектами
        управления яхтой и дает необходимые знания и навыки для безопасного и эффективного плавания.
      </p>
      <p>Цены и расписание обучения</p>
      <p>Квалификации и сертификаты</p>
    </div>
  );
};

export default Courses;
