import './checkbox.css';
import React from 'react';

function Checkbox(props) {
  const [checked, setChecked] = React.useState(false);

  function handleSwitchCheckbox(e) {
    setChecked(!checked);
    props.handleFilterMovies(checked);
}

  React.useEffect(() => {
    setChecked(props.filterMovies);

}, [props.filterMovies]);

  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          checked={checked}
          onChange={handleSwitchCheckbox}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
};

export default Checkbox;