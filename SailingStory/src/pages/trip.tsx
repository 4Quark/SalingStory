import fethiye from '../assets/fethiye.png';

const Trip = () => {
  return (
    <div className="trip_container">
      <h2>Экскурсии и прогулки</h2>
      <img className="trip_promo_img" src={fethiye} alt="fethiye map" />
      <p>Возможности чартеров и экскурсий (маршруты, достопримечательности, время поездки</p>
      <p>Цены и условия чартеров и экскурсий</p>
      <p>Бронирование чартеров и экскурсий</p>
    </div>
  );
};

export default Trip;
