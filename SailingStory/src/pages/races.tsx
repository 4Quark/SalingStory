import { NavLink } from 'react-router-dom';
import info from '../data/info.json';

const Races = () => {
  return (
    <div className="races_container">
      <div className="promo">
        <div className="video_container">
          <video muted loop autoPlay>
            <source
              src="https://www.dl.dropboxusercontent.com/scl/fi/gl4zsg9atprt7w8j6x27r/all1080.mp4?rlkey=u8wm5ndjj9k4gbg8itpft7y65&dl=0"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="promo_text">
          <h2>Заморские регаты</h2>
          <h3>Выбирай, как продлить лето!</h3>
        </div>
      </div>
      <div className="motivation">
        Может быть, вы уже попробовали себя в парусном спорте, а может быть и нет, но гонки в море — это нечто совершенно
        особенное! Другая вода, другие берега, да и ветер ощущается совсем по-другому. Пошли ловить свободу вместе с нами!
      </div>
      <div className="event_wrapper">
        {info.events?.map((event, i) => (
          <div key={i} className="event">
            <img src={event.picture} />
            <div className="event_info">
              <h3>{event.title}</h3>
              <div className="event_main">
                <div>{event.date}</div>
                <div>{event.location}</div>
              </div>
              <p className="event_subtitle">{event.subtitle}</p>
              <a href={event.link}> На сайт организатора </a>
              <NavLink to={'races/' + i} className="event_link"></NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Races;
