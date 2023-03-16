import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import aqCheck from '@/utils/aq-check';
import { setDetail } from '@/redux/city';
import './styles/city-card.styles.scss';

function CityCard({ city }) {
  const { name, aqi, time } = city;
  const { title, color } = aqCheck(aqi);
  const dispatch = useDispatch();

  const cityDetailClick = () => {
    dispatch(setDetail(city));
  };

  return (
    <div className="city-card" style={{ backgroundColor: color }}>
      <Link to="/city-detail">
        <div onClick={cityDetailClick} className="next-city">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 next-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </Link>
      <div className="aqi">
        <h3>{aqi}</h3>
        <span className="title">{title}</span>
      </div>
      <div className="city-info">
        <h3>{name}</h3>
        <span>{time.s}</span>
      </div>
    </div>
  );
}

export default CityCard;
