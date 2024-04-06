import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { useState } from 'react';
import { Button, InputBox } from './components';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [originCurrency, setOriginCurrency] = useState('eur');
  const [destCurrency, setDestCurrency] = useState('usd');

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
          amount={Number(amount.toFixed(2))}
          onAmountChange={onAmountChange(setAmount)}
          firstLabel="From"
          secondLabel="Currency"
          selectedCurrency={originCurrency}
          onCurrencyChange={onCurrencyChange(setOriginCurrency)}
          currencyOptions={['eur', 'usd', 'mad']}
        />

        <Button className="-mt-2.5 -mb-2.5 flex border-2 border-white place-self-center z-10 py-2 px-1.5">
          <FaLongArrowAltUp className="-mr-1" />
          <FaLongArrowAltDown />
        </Button>

        <InputBox
          amount={Number(convertedAmount.toFixed(2))}
          onAmountChange={onAmountChange(setConvertedAmount)}
          firstLabel="To"
          secondLabel="Currency"
          selectedCurrency={destCurrency}
          onCurrencyChange={onCurrencyChange(setDestCurrency)}
          currencyOptions={['eur', 'usd', 'mad']}
        />
      </form>
    </main>
  );
}

export default App;
