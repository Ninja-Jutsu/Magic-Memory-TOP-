import React from 'react';
function SelectInput({
  type = 'text',
  id,
  label,
  className,
  options,
  ...delegated
}) {
  const [isConfirmed, setIsConfirmed] =
    React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsConfirmed(!isConfirmed);
  }
  const [lang, setLang] = React.useState(options[0]);

  return !isConfirmed ? (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsConfirmed(!isConfirmed);
      }}
    >
      <label htmlFor='lang'>{label}</label>
      <select
        {...delegated}
        id={id}
        defaultValue={''}
        value={lang}
        onChange={(event) => {
          setLang(event.target.value);
          setIsConfirmed(!isConfirmed);
        }}
      >
        {options.map((value, index) => (
          <option
            key={index}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
    </form>
  ) : (
    <div className={`${className}-wrapper`}>
      <span onClick={handleSubmit}>{lang}</span>
    </div>
  );
}
export default SelectInput;
