import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useCurrencyData(currency) {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const uri = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`;

    const fetchData = async () => {
      const response = await fetch(uri);
      const data = await response.json();
      return data[currency];
    };

    (async () => {
      setCurrencyData(await fetchData());
    })();
  }, [currency]);

  return currencyData;
}

useCurrencyData.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default useCurrencyData;
