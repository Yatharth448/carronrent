import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {

  return (
    <>

      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className='cards__item__text_button'>
              <h6 className='cards__item__text_h6'>{props.carName}</h6>
              <Link className='booknow_link' to={props.path}>
                Book Now
              </Link>
            </div>
            <h6 className='cards__item__text_h5'>{props.kmDriven}</h6>
            <h5 className='cards__item__text_h5'>{props.carType}</h5>
            <h5 className='cards__item__text_h5'>{props.seater}</h5>
            <h5 className='cards__item__text_h5'>{props.carRating}</h5>
            <h5 className='cards__item__text_h5'>{props.chargePerDay}</h5>

          </div>
        </Link>
      </li>
    </>
  );
}
export default CardItem;
