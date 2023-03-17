import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import aqCheck from '../utils/aq-check';
import './styles/city-detail.styles.scss';

function CityDetail() {
  const {
    name, aqi, time, forecast,
  } = useSelector((state) => state.cityInfo.cityDetail);
  const { title, color } = aqCheck(aqi);

  return (
    <div className="city-container">
      <div className="bar-head">
        <Link to="/cities">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 back-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <span>AIR QUALITY DETAIL</span>
      </div>
      <div className="detail-body">
        <div className="ct-header">
          <h3>{name}</h3>
        </div>
        <div className="ct-info">
          <div className="aqi">
            <span>{time.s}</span>
            <span className="aqi-n" style={{ backgroundColor: color }}>{aqi}</span>
            <span className="aq-title">{title}</span>
          </div>
          <div className="forecast">
            <h4>PM25 Forecast</h4>
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
    </div>
  );
}

export default CityDetail;
