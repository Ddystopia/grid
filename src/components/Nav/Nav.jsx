import React, { useState } from 'react'
import classNames from './Nav.module.css'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/tableReducer'

export const Nav = () => {
  const dispatch = useDispatch()
  const setFilterString = filterString => dispatch(setFilter(filterString))
  const [filterQuery, setFilterQuery] = useState('')
  return (
    <nav className={classNames.nav}>
      <label className={classNames.label}>
        <span>Filter:</span>
        <input type="text" value={filterQuery} onChange={e => setFilterQuery(e.target.value)} />
      </label>
      <button
        className={classNames.searchButton}
        aria-label="search"
        onClick={() => setFilterString(filterQuery)}
      >
        <span role="img" aria-label="search">
          🔍︎
        </span>
      </button>
    </nav>
  )
}
