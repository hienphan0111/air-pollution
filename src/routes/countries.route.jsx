import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoutries } from '../redux/countries';
import CountryCard from '@/components/country-card.component';
import TopBar from '@/components/TopBar.component';
import './styles/countries.styles.scss';

function Countries() {
  const { status, countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const [currentCountries, setCurrentCountries] = useState(countries);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    if (status === 'update') {
      dispatch(getCoutries());
    }
    if (countries !== []) {
      setCurrentCountries(countries);
    }
  }, [status]);

  const searchHandler = (e) => {
    setSearchCountry(e.target.value);
    const searchResult = countries.filter((country) => (
      country.name.toLowerCase().includes(searchCountry)
    ));
    setCurrentCountries(searchResult);
  };

  return (
    <div className="countries-container">
      <TopBar text="ALL COUNTRY" link="/" />
      <div className="header">
        <h1>AIR POLLUTION</h1>
        <span>the real-time Air Quality</span>
      </div>
      <div className="bar">
        <span>START BY SELECT A COUNTRY TO SEE MORE DETAIL</span>
        <div className="search">
          <input
            type="search"
            value={searchCountry}
            onChange={searchHandler}
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className="countries">
        {
          currentCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))
        }
      </div>
    </div>
  );
}

export default Countries;
