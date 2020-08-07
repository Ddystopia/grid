import React from 'react'
import PropTypes from 'prop-types'
import classNames from './Table.module.css'
import { UserRow } from './UserRow/UserRow'
import { userSchema, setSortBy, toggleSortIsDesc, setSelectedId } from '../../../redux/tableReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSortIsDesc,
  getSortBy,
  getTableSelectDatas,
  getHasError,
  getIsFetching,
} from '../../../redux/selectors'

export const Table = ({ users }) => {
  const dispatch = useDispatch()
  const sortIsDesc = useSelector(getSortIsDesc)
  const sortBy = useSelector(getSortBy)
  const hasError = useSelector(getHasError)
  const isFetching = useSelector(getIsFetching)
  const headers = useSelector(getTableSelectDatas)

  const handleSelectDataClick = header => {
    dispatch(setSortBy(header))
    dispatch(toggleSortIsDesc())
  }

  const handleRowFocus = userId => dispatch(setSelectedId(userId))
  return (
    <table className={classNames.table}>
      <tbody>
        <tr>
          {headers.map(h => (
            <th key={h} onClick={() => handleSelectDataClick(h)} tabIndex={0}>
              {h}
              <span className={sortIsDesc && sortBy === h ? classNames.active : ''}>▼</span>{' '}
            </th>
          ))}
        </tr>
        {/* prettier-ignore */}
        <tr hidden={!hasError && !isFetching && users.length}>
          {hasError && <th>Ooops... Something went wrong....</th>}
          {isFetching && <th><Preloader /></th>}
          {!users.length && <th>Empty</th>}
        </tr>

        {users.map(user => (
          <UserRow user={user} key={user.id} onFocus={() => handleRowFocus(user.id)} />
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  users: PropTypes.arrayOf(userSchema),
}

const Preloader = () => <div>Loading...</div>
