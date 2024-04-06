import React from 'react';

function Input({
  type = 'text',
  id,
  label,
  className,
  ...delegated
}) {
  const [isConfirmed, setIsConfirmed] =
    React.useState(false);
  const [value, setValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setIsConfirmed(!isConfirmed);
  }

  return !isConfirmed ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...delegated}
        type={type}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        style={{ display: 'none' }}
      ></button>
    </>
  ) : (
    <div className={`${className}-wrapper`}>
      <span onClick={handleSubmit}>{value}</span>
    </div>
  );
}

export default Input;
