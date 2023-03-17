import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { getCities, getAQCities } from '../redux/cities';
import CityCard from '../components/city-card.component';
import './styles/cities.styles.scss';

function Cities() {
  const {
    cities, status, country, citiesAQ,
  } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState();

  useEffect(() => {
    if ((status === 'updateCities' && !currentCountry) || (currentCountry !== country)) {
      // console.log('update');
      dispatch(getCities(country));
      setCurrentCountry(country);
    }
    if (status === 'updateAQ') {
      dispatch(getAQCities(cities));
    }
  }, [status, country]);

  // console.log(cities);
  return (
    <div className="cities-container">
      <div className="bar-head">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 back-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <span>CITIES VIEW</span>
      </div>
      <div className="header">
        <h1>
          {country}
          {' '}
          - AIR POLLUTION
        </h1>
        <span>the real-time Air Quality</span>
      </div>
      <div className="bar">
        <span>SELECT A CITY TO SEE MORE DETAIL</span>
      </div>
      {
        (status === 'complete') && citiesAQ.map((city) => (
          <CityCard key={city.id} city={city} />
        ))
      }
      {(status !== 'complete') && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default Cities;
