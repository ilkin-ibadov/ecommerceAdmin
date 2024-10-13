const Input = ({ name = "", value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        value={value}
        name={name}
        className="border border-zinc-400 rounded-md mt-1 px-2 py-1"
      />
    </div>
  );
};

export default Input;
