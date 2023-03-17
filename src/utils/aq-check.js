export default function aqCheck(aqi) {
  switch (true) {
    case (aqi > 0 && aqi <= 50):
      return {
        title: 'Good',
        color: '#0c563b',
      };
    case (aqi > 50 && aqi <= 100):
      return {
        title: 'Moderate',
        color: '#cac009',
      };
    case (aqi > 100 && aqi <= 150):
      return {
        title: 'Unhealthy for Sensitive Groups',
        color: '#d28904',
      };
    case (aqi > 150 && aqi <= 200):
      return {
        title: 'Unhealthy',
        color: '#a91717',
      };
    case (aqi > 200 && aqi <= 300):
      return {
        title: 'Very Unhealthy',
        color: '#5e0282',
      };
    case (aqi > 300):
      return {
        title: 'Hazardous',
        color: '#5c0000',
      };
    default: break;
  }
  return { title: '', color: '#fff' };
}
