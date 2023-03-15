import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cities from './routes/cities.route';
import Countries from './routes/countries.route';
import CityDetail from './routes/city-detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city-detail" element={<CityDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
