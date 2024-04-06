import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Button, InputBox } from './components';
import { useCurrencyData } from './hooks';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [originCurrency, setOriginCurrency] = useState('eur');
  const [destCurrency, setDestCurrency] = useState('usd');

  // currency data
  const currencyData = useCurrencyData(originCurrency);

  const onSwap = () => {
    setDestCurrency(originCurrency);
    setOriginCurrency(destCurrency);
  };

  const onAmountChange = (callback) => {
    return ({ target: { value } }) => {
      callback(Number(value));
    };
  };

  const onCurrencyChange = (callback) => {
    return ({ target: { value } }) => {
      callback(value);
    };
  };

  useEffect(() => {
    const convert = () => {
      setConvertedAmount(amount * currencyData[destCurrency]);
    };

    convert();
  }, [amount, originCurrency, destCurrency, currencyData]);

  return (
    <main
      className="h-screen m-0 grid items-center justify-center w-full bg-cover"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      <form style={{ width: '500px' }} className="grid grid-cols-1">
        <InputBox
          amount={Number(amount)}
          onAmountChange={onAmountChange(setAmount)}
          firstLabel="From"
          secondLabel="Currency"
          selectedCurrency={originCurrency}
          onCurrencyChange={onCurrencyChange(setOriginCurrency)}
          currencyOptions={Object.keys(currencyData)}
        />

        <Button
          onClick={onSwap}
          className="-mt-2.5 -mb-2.5 flex border-2 border-white place-self-center z-10 py-2 px-1.5"
        >
          <FaLongArrowAltUp className="-mr-1" />
          <FaLongArrowAltDown />
        </Button>

        <InputBox
          amount={Number(convertedAmount)}
          onAmountChange={onAmountChange(setConvertedAmount)}
          firstLabel="To"
          secondLabel="Currency"
          selectedCurrency={destCurrency}
          onCurrencyChange={onCurrencyChange(setDestCurrency)}
          currencyOptions={Object.keys(currencyData)}
          amountDisabled
        />
      </form>
    </main>
  );
}

export default App;
