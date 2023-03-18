import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryCard from '../components/country-card.component';
import axios from 'axios';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Render the country lists', () => {
  it('Renders the country correctly', () => {
    const country = {
      id: 2,
      name: 'Poland',
      flag: 'https://flagcdn.com/pl.svg',
      region: 'Asia',
    };

    const card = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountryCard key={country.id} country={country}/>
        </MemoryRouter>
      </Provider>
    ).toJSON();
  
    expect(card).toMatchSnapshot();
  });
});