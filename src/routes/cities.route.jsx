import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getCities, getAQCities } from '../redux/cities';
import CityCard from '../components/city-card.component';
import TopBar from '@/components/TopBar.component';
import './styles/cities.styles.scss';

function Cities() {
  const {
    cities, status, country, citiesAQ,
  } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState();

  useEffect(() => {
    if ((status === 'updateCities' && !currentCountry) || (currentCountry !== country)) {
      dispatch(getCities(country));
      setCurrentCountry(country);
    }
    if (status === 'updateAQ') {
      dispatch(getAQCities(cities));
    }
  }, [status, country]);

  return (
    <div className="cities-container">
      <TopBar text="CITIES VIEW" link="/" />
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
