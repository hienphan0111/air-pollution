import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoutries } from '../redux/countries';
import CountryCard from '@/components/country-card.component';
import './styles/countries.styles.scss';

function Countries() {
  const { status, countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'update') {
      dispatch(getCoutries());
    }
  }, [status]);

  return (
    <div className="countries-container">
      <div className="header">
        <h1>AIR POLLUTION</h1>
        <span>the real-time Air Quality</span>
      </div>
      <div className="bar">
        <span>SELECT COUNTRY TO SEE MORE DETAIL</span>
      </div>
      <div className="countries">
        {
          countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))
        }
      </div>
    </div>
  );
}

export default Countries;
