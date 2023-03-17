import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setCountry } from '../redux/cities';
import './styles/country-card.styles.scss';

function CountryCard({ country }) {
  const {
    name, flag, region, id,
  } = country;
  const dispatch = useDispatch();

  const citiesAccess = () => {
    dispatch(setCountry(id));
  };

  return (
    <div className="country-card">
      <div className="overlay" />
      <Link to="/cities">
        <div role="button" tabIndex={0} onClick={citiesAccess} onKeyDown={citiesAccess} className="next-route">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 next-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </Link>
      <div className="flag">
        <img src={flag} alt={`${name}-flag`} />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <span>{region}</span>
      </div>
    </div>
  );
}

CountryCard.defaultProps = {
  country: {
    name: '',
    id: '',
    flag: '',
    region: '',
  },
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    flag: PropTypes.string,
    region: PropTypes.string,
  }),
};

export default CountryCard;
