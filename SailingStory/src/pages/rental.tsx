import { useState } from 'react';
import BoatCard from '../components/boatCard';
import Modal from '../components/modal';
import data from '../data/boats.json';
import { boatProps } from '../services/types';

const Rental = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalBoat, setModalBoat] = useState<boatProps>(data.boats[0]);

  const openModal = (boat: boatProps) => {
    setIsModal(true);
    setModalBoat(boat);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="rental_container">
      <h2>Аренда яхты</h2>
      <div className="boats_container">
        {data.boats.length !== 0 ? (
          data.boats.map((item, i) => <BoatCard key={i} boat={item} openModal={openModal} />)
        ) : (
          <h2>There is nothing here</h2>
        )}
      </div>
      <p>Описание яхт в аренду (параметры, размеры, комплектация, количество членов команды)</p>
      <p>Цены и условия аренды</p>
      <p>Бронирование яхты</p>
      {isModal && <Modal boat={modalBoat} closeModal={closeModal} />}
    </div>
  );
};

export default Rental;
