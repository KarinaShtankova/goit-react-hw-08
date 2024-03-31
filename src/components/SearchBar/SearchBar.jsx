import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const searchId = useId();

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
