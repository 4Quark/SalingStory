import { useParams } from 'react-router-dom';
import info from '../data/info.json';

const Race = () => {
  const i = useParams().raceID;
  if (i) {
    if (+i < info.events.length) {
      return (
        <div className="race_container">
          <div className="promo">
            <div className="video_container">
              <video muted loop autoPlay>
                <source src={info.events[+i].video} type="video/mp4" />
              </video>
            </div>
            <div className="promo_text">
              <h2>{info.events[+i].title}</h2>
              <div>Даты: {info.events[+i].date}</div>
              <div>Акватория: {info.events[+i].location}</div>
            </div>
          </div>
          <div className="motivation">{info.events[+i].subtitle}</div>
          <div className="race_pictires">
            <img className="race_pictire" src={info.events[+i].picture} />
            {info.events[+i].photos?.map((photo, i) => (
              <img key={i} className="race_pictire" src={photo} />
            ))}
          </div>
          <div className="race_programm">
            <h3>Программа</h3>
            {info.events[+i].programm?.map((programm, i) => (
              <div key={i} className="race_programm_item">
                <div className="circle">
                  <div className="race_programm_date">{programm.date}</div>
                  <div className="race_programm_schedule">{programm.schedule}</div>
                </div>
              </div>
            ))}
          </div>
          <p>{info.events[+i].info}</p>
          <a href={info.events[+i].link}> На сайт организатора </a>
          <div className="race_price">
            <h3>Стоимость</h3>
          </div>
        </div>
      );
    } else {
      return <div className="race_container">Такая гонка не найдена</div>;
    }
  } else {
    return <div className="race_container">Такая гонка не найдена</div>;
  }
};

export default Race;
