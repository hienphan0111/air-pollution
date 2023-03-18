/**
 * @jest-environment jsdom
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import CityCard from '../components/city-card.component';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

const reactRedux = { useDispatch, useSelector };

describe('Display city info on Card', () => {
  
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  })
  afterEach(() => {
      useDispatchMock.mockClear();
      useSelectorMock.mockClear();
  })

  const city = {
    id: 5,
    name: 'one',
    aqi: 10,
    time: {
      s: '2022-21-12 17:00'
    },
  }
  
  it('Render detail info of city', () => {

    // useSelectorMock.mockImplementation(selector => selector(mockStore));
    useDispatchMock.mockImplementation(() => () => {});
    // const data = useSelectorMock.mockImplementation(() => mockStore);

    const card = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CityCard key={city.id} city={city}/>
        </MemoryRouter>
      </Provider>
    ).toJSON();
    // render(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <CityCard key={city.id} city={city}/>
    //     </MemoryRouter>
    //   </Provider>
    // )
  
    expect(card).toMatchSnapshot();
    // expect(screen.getByText('10')).toHaveDisplayValue('10');

  })

});