"use client";
import { useState } from "react";

const Select = ({ options, title, value }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  return (
    <button
      className="flex flex-col items-start w-full"
      type="button"
      onClick={() => {
        setSelectOpen(true);
      }}
    >
      {title && (
        <label htmlFor={title}>
          {title}
        </label>
      )}
      <div className="flex flex-col border border-zinc-400 rounded-md mt-1 w-full">
        <p className="px-2 py-1">{selectedState ? selectedState : value}</p>

        {options && selectOpen && (
          <select
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectOpen(false);
            }}
            name={title.charAt(0).toUpperCase() + title.slice(1)}
            className="border border-zinc-400 rounded-md px-3 py-2 opacity-0 absolute w-auto"
          >
            <option disabled>Select category</option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        )}
      </div>
    </button>
  );
};

export default Select;
