import React, { useState } from 'react'
import classNames from './navy.module.css'

export const Nav = () => {
  const [filterQuery, setFilterQuery] = useState('')
  return (
    <nav className={classNames.nav}>
      <label className={classNames.label}>
        Filter: <input type="text" value={filterQuery} onChange={setFilterQuery} />
      </label>
      <button className={classNames.searchButton}>Search</button>
    </nav>
  )
}
