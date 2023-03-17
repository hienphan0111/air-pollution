import reducer, {setDetail} from '../redux/city';

describe('city detail state', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual({cityDetail: [],});
  });

  it('should handle a todo being added to an city object', () => {
    const previousState = { };
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
    expect(reducer(previousState, setDetail(cityDetail))).toEqual({cityDetail});
  })

})
