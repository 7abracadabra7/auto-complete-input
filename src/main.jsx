/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, text, setText }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={(e) => handleChange(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default Input;
