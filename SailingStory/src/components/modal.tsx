import React from 'react';
import { boatProps } from '../services/types';

type ModalProps = {
  boat: boatProps;
  closeModal: () => void;
};

const Modal = ({ boat, closeModal }: ModalProps) => {
  return (
    <div className="modal_container" onClick={(e) => e.currentTarget === e.target && closeModal()}>
      <div className="modal_wrapper">
        <div className="modal_window">
          <div className="close" onClick={() => closeModal()}>
            ✖
          </div>
          <div className="modal_info">
            <div className="modal_main_info">
              <h2>{boat.boatName}</h2>
              <div className="modal_picture">
                <img className="modal_img" src={'/boats/' + boat.boatPicture + '.jpeg'} alt={boat.boatName} />
              </div>
            </div>
            <div className="modal_additional_info">
              <h5 className="card_subheader">Shipyard: {boat.boatShipyard}</h5>
              <div>
                <div className="card_text">Сountry: {boat.boatСountry}</div>
                <div className="card_text">Length: {boat.boatLength} m</div>
                <div className="card_text">Hull beam: {boat.boatHull} m</div>
                <div className="card_text">Keel draft: {boat.boatKeel} m</div>
                <div className="card_text">{boat.boatType}</div>
                <div className="card_text">Year: {boat.boatYear}</div>
                <div className="card_text">€ {boat.boatPrice}</div>
              </div>
              <button className="card_btn" onClick={() => closeModal()}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
