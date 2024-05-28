import { useState } from 'react';

const FormPOST = () => {
  const [value, setValue] = useState(''); // value - строка input

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/firstform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: value }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formOne">Сообщения формы №1:</label>
        <input
          type="text"
          id="formOne"
          value={value} // value из useState
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormPOST;
