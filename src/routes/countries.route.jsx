import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoutries } from '../redux/countries';

function Countries() {
  const { status } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'update') {
      dispatch(getCoutries());
    }
  }, status);
  useEffect();
  return (
    <div>
      This is countries page
    </div>
  );
}

export default Countries;
