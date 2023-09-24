import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Burger from './burger';

import info from '../data/info.json';

const Header = () => {
  return (
    <header className="header">
      <NavLink className="logo" to="/">
        <img className="logo_img" src={logo} alt="logo img" />
      </NavLink>
      <nav className="nav">
        <NavLink className="nav_link" to="/next/0">
          Ближайшее мероприятие
        </NavLink>
        <NavLink className="nav_link nav_show" to="/races">
          Все приключения
          <div className="nav_hidden">
            {info.events?.map((event, i) => (
              <NavLink key={i} className="nav_sublink" to={'races/' + i}>
                {event.title}
              </NavLink>
            ))}
          </div>
        </NavLink>
        <NavLink className="nav_link" to="/answers">
          FAQ
        </NavLink>
        <NavLink className="nav_link" to="/about">
          О нас
        </NavLink>
        <NavLink className="nav_link" to="/contacts">
          Контакты
        </NavLink>
      </nav>
      <Burger />
    </header>
  );
};

export default Header;
