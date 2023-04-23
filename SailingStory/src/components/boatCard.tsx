import * as React from 'react';
import { boatProps } from '../services/types';

type cardProps = {
  boat: boatProps;
  openModal: (boat: boatProps) => void;
};
type cardState = Record<string, never>;

class BoatCard extends React.Component<cardProps, cardState> {
  constructor(props: cardProps) {
    super(props);
  }

  render() {
    return (
      <div className="boat_card" onClick={() => this.props.openModal(this.props.boat)}>
        <img className="boat_img" src={'/boats/' + this.props.boat.boatPicture + '.jpeg'} alt={this.props.boat.boatName} />
        <div className="boat_name">{this.props.boat.boatName}</div>
        <div className="boat_info">
          <div>
            by {this.props.boat.boatShipyard} ({this.props.boat.boatСountry})
          </div>
          <div>{this.props.boat.boatLength} m</div>
          <div>{this.props.boat.boatYear} year</div>
        </div>
        <div className="boat_price">
          <div>€ {this.props.boat.boatPrice}</div>
        </div>
        <button className="add_cart_button">More info</button>
      </div>
    );
  }
}

export default BoatCard;
