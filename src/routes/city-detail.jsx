import { useSelector } from 'react-redux';
import './styles/city-detail.styles.scss';

function CityDetail() {
  const {
    name, aqi, time, pm25,
  } = useSelector((state) => state.cityDetail.cityDetail);
  return (
    <div className="city-container">
      <div className="ct-header">
        <h3>{name}</h3>
      </div>
      <div className="ct-info">
        <span>{time}</span>
        <span>
          AQi:
          {aqi}
        </span>
        <div className="forecast">
          <h4>Forecast</h4>
          <div className="fc-table">
            <span>Date</span>
            <span>avg</span>
            <span>min</span>
            <span>max</span>
            {
              pm25.map((item) => (
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
