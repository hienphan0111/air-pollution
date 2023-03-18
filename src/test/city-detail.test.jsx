/**
 * @jest-environment jsdom
 */

import React from 'react';
import 'mock-react-redux';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import CityDetail from '../routes/city-detail';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import mockReactRedux from 'mock-react-redux';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

const reactRedux = { useDispatch, useSelector };

describe('Render the detail info of city', () => {
  
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  const cityDetail = {
    id: 5,
    name: 'one',
    aqi: 10,
    time: {
      s: '2022-21-12 17:00'
    },
    forecast: [{
      day: '2023-03-14',
      avg: 133,
      min: 90,
      max: 160,
    }]
  }
  
  it('Render detail info of city', () => {

    mockReactRedux().state({
      cityInfo: {
        cityDetail,
      }
    });

    const detail = TestRenderer.create(
      <MemoryRouter>
        <CityDetail />
      </MemoryRouter>).toJSON();

    expect(detail).toMatchSnapshot();
  })

});