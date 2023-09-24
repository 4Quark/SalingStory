import info from '../data/info.json';
import qr from '../assets/tg.png';

const Contacts = () => {
  return (
    <div className="contacts_container">
      <h2>Мы на связи!</h2>
      {info.contacts?.map((info, i) => (
        <a key={i} className="contacts_item" href={info.link} target="_blank" rel="noreferrer">
          {info.contact}: {info.value}
        </a>
      ))}
      <img className="telegram_qr" src={qr} alt="telegramm_qr" />
    </div>
  );
};

export default Contacts;
