import sailBoat from '../assets/before_footer.png';
import telegram from '../assets/social/telegramm.svg';
import instagram from '../assets/social/instagram.svg';
import YouTube from '../assets/social/youtube.svg';
import twitter from '../assets/social/twitter.svg';
import mail from '../assets/social/mail.png';
import facebook from '../assets/social/facebook.svg';
import phone from '../assets/social/phone.png';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_before">
        <img className="footer_before_img" src={sailBoat} alt="sail boat draw" />
        <div className="footer_before_lane"></div>
      </div>
      <div className="footer_info">
        <div className="footer_contacts">
          <ul className="contacts_list">
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.facebook.com">
                <img src={telegram} alt="Telegram logo" />
                Telegram
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://twitter.com">
                <img src={instagram} alt="Instagram logo" />
                Instagram
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.instagram.com">
                <img src={YouTube} alt="YouTube logo" />
                YouTube
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.youtube.com">
                <img src={twitter} alt="Twitter logo" />
                Twitter
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.mail.ru">
                <img src={mail} alt="mail logo" />
                e-mail
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.facebook.com">
                <img src={facebook} alt="Facebook logo" />
                Facebook
              </a>
            </li>
            <li className="contacts_list_item">
              <a className="link_holder" href="https://www.facebook.com">
                <img src={phone} alt="Phone logo" />
                +7(999)999-99-99
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_disclamer">by 4Quark</div>
    </footer>
  );
};

export default Footer;
