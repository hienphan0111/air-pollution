import { Link } from 'react-router-dom';
import Cities from '@/routes/cities.route';
import { setCountry } from '@/redux/cities';
import { useDispatch } from 'react-redux';
import './styles/country-card.styles.scss';

function CountryCard({country}) {
  const { name, flag, region, nameCommon } = country;
  const dispatch = useDispatch();

  const citiesAccess = (e) => {
    console.log(e.target);
    dispatch(setCountry(nameCommon));
  };

  return(
    <div className="country-card">
      <Link to='cities'>
        <div onClick={citiesAccess} className="next-route">
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

export default CountryCard;