import Proptypes from 'prop-types';

function Button({ isTypeSubmit, className, onClick, children }) {
  return (
    <button
      type={isTypeSubmit ? 'submit' : 'button'}
      className={`bg-green-500 text-white rounded-lg p-3 font-semibold tracking-wider text-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isTypeSubmit: Proptypes.bool,
  className: Proptypes.string,
  onClick: Proptypes.func,
  children: Proptypes.oneOfType([Proptypes.string, Proptypes.node]).isRequired,
};

Button.defaultProps = {
  isTypeSubmit: false,
  className: '',
  onClick: undefined,
};

export default Button;
