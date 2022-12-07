import './checkbox.css';
import React from 'react';

function Checkbox(props) {


  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          checked={props.checked || false}
          onChange={props.handleFilter}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>

    </div>
  );
};

export default Checkbox;