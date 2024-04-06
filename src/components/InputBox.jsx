import { useId } from 'react';
import PropTypes from 'prop-types';

function InputBox({
  amount,
  onAmountChange,
  firstLabel,
  secondLabel,
  amountDisabled,
  min,
  currencyOptions,
  selectedCurrency,
  onCurrencyChange,
}) {
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
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired,
  amountDisabled: PropTypes.bool,
  min: PropTypes.number,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
  amountDisabled: false,
  min: 0,
};

export default InputBox;
