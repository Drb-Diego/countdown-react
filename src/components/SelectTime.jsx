import React from "react";

export default function SelectTime({ label }) {
  let options = Array.apply(null, Array(59));

  options = options.reduce((acc, value, index) => {
    acc.push(index + 1);
    return acc;
  }, []);

  return (
    <label className="label-select">
      {label}
      <select name={label}>
        <option selected disabled>00</option>
        {
          options.map((option, index) => (
            <option value={index + 1} key={ index }>
              {index + 1}
            </option>
          ))
        }
      </select>
    </label>
  );
}
