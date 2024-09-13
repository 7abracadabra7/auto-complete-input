/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, setHint, text, setText, setFinish }) => {
  const handleKey = (event) => {
    if (event.key == "Enter") {
      setFinish({ finish: true, result: hint });
      setText("");
      setHint("");
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
