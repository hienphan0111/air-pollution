import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCities, getAQCities } from '@/redux/cities';
import CityCard from '@/components/city-card.component';

function Cities() {
  const { cities, status, country } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState();

  useEffect(() => {
    if((status === 'updateCities' && !currentCountry) || ( currentCountry !== country)) {
      // console.log('update');
      dispatch(getCities(country));
      setCurrentCountry(country);
    }
    if (status === 'updateAQ') {
      dispatch(getAQCities(cities));
    }
  }, [status, country]);

  console.log(country, cities);
  return (
    <div className="cities-container">
      {
        cities.map((city) => (
          <CityCard key={city.idx} city={city} />
        ))
      }
    </div>
  );
}

export default Cities;
