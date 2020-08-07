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
        Filter:{' '}
        <input type="text" value={filterQuery} onChange={e => setFilterQuery(e.target.value)} />
      </label>
      <button className={classNames.searchButton} onClick={() => setFilterString(filterQuery)}>
        Search
      </button>
    </nav>
  )
}
