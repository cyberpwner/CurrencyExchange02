import { useId, useState } from 'react';
import PropTypes from 'prop-types';

function InputBox({
  firstLabel,
  secondLabel,
  amountDisabled,
  min,
  currencyOptions,
}) {
  const [amount, setAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('eur');

  const onAmountChange = ({ target: { value } }) => {
    setAmount(value);
  };

  const onCurrencyChange = ({ target: { value } }) => {
    setSelectedCurrency(value);
  };

  // field ids
  const amountId = useId();
  const currencyId = useId();

  return (
    <section className="bg-white p-4 grid grid-cols-2 gap-6 w-full rounded-lg">
      <section className="w-full">
        <label
          htmlFor={`amount${amountId}`}
          className="grid grid-col-1 gap-0.5 w-full text-black/40 text-sm"
        >
          {firstLabel}
          <input
            type="number"
            name="amount"
            id={`amount${amountId}`}
            value={amount}
            onChange={onAmountChange}
            disabled={amountDisabled}
            min={min}
            className="text-black/85 rounded-lg p-2 border outline-none focus:border-slate-400"
          />
        </label>
      </section>

      <section className="w-full">
        <label
          htmlFor={`currency${currencyId}`}
          className="grid grid-col-1 gap-0.5 place-items-end w-full text-black/40  text-sm"
        >
          {secondLabel}
          <select
            className="px-3 py-2 rounded-md w-full text-black/85 cursor-pointer bg-gray-100 border focus:border-slate-400"
            name="currency"
            id={`currency${currencyId}`}
            value={selectedCurrency}
            onChange={onCurrencyChange}
          >
            {currencyOptions.map((curr) => (
              <option value={curr} key={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>
      </section>
    </section>
  );
}

InputBox.propTypes = {
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired,
  amountDisabled: PropTypes.bool,
  min: PropTypes.number,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
};

InputBox.defaultProps = {
  amountDisabled: false,
  min: 0,
  currencyOptions: ['eur', 'mad', 'usd'],
};

export default InputBox;
