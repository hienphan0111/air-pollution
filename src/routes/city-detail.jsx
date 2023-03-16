import { useSelector } from 'react-redux';
import aqCheck from '@/utils/aq-check';
import './styles/city-detail.styles.scss';

function CityDetail() {
  const {
    name, aqi, time, forecast,
  } = useSelector((state) => state.cityInfo.cityDetail);
  const { title, color } = aqCheck(aqi);
  console.log(name, aqi, forecast);
  // const { cityDetail } = useSelector((state) => state.cityInfo);
  return (
    <div className="city-container">
      <div className="ct-header">
        <h3>{name}</h3>
      </div>
      <div className="ct-info">
        <div className="aqi">
          <span>{time.s}</span>
          <span className="aqi-n" style={{backgroundColor: color}}>{aqi}</span>
          <span className="aq-title">{title}</span>
        </div>
        <div className="forecast">
          <h4>Forecast</h4>
          <div className="fc-table">
            <div className="fc-head">
              <span>Date</span>
              <span>avg</span>
              <span>min</span>
              <span>max</span>
            </div>
            {
              forecast.map((item) => (
                <div key={item.id} className="pm25">
                  <span>{item.day}</span>
                  <span>{item.avg}</span>
                  <span>{item.min}</span>
                  <span>{item.max}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityDetail;
