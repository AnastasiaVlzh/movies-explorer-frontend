import './checkbox.css';
import React from 'react';

function Checkbox() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default Checkbox;