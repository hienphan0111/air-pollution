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
      {
        countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))
      }
    </div>
  );
}

export default Countries;
