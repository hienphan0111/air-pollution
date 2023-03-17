import reducer, { getCountries } from '../redux/countries';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('axios');

describe('Countries reducer', () => {
  it('should return init state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual({ countries: [], status: 'update'});
  });

})