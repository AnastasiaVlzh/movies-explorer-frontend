import './checkbox.css';
import React from 'react';

function Checkbox(props) {
  const [checked, setChecked] = React.useState(true);
  const [checkedShort, setCheckedShort] = React.useState(true);

  function handleSwitchCheckbox(e) {
    setChecked(!checked);
    props.handleFilterMovies(checked);
}

function handleSwitchShortFilmCheckbox(e) {
  setCheckedShort(!checkedShort);
  props.handleFilterShortMovies(checkedShort)
}

  React.useEffect(() => {
    setChecked(props.filterMovies);

}, [props.filterMovies]);

React.useEffect(() => {
  setCheckedShort(props.filterShortMovies);

}, [props.filterShortMovies]);

  return (
    <div className="filter">
      {!props.isSavedMoviesList?
      (<label className="filter__label">
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
      </label>)
      :
      (<label className="filter__label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filter"
          id="filter"
          checked={checkedShort}
          onChange={handleSwitchShortFilmCheckbox}
        />
        <span className="filter__style"></span>
        <span className="filter__text">Короткометражки</span>
      </label>)
      
      }

    </div>
  );
};

export default Checkbox;