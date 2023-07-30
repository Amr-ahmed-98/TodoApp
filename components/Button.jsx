const Button = ({ children, className }) => {
  return (
    <button type='button' className={className}>
      {children}
    </button>
  );
};

export default Button;
