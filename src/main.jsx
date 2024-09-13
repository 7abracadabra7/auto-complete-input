/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, text, setText }) => {
  const handleKey = (event) => {
    if (event.key == "Enter") {
      setText(hint);
    }
  };
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={(e) => handleChange(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default Input;
