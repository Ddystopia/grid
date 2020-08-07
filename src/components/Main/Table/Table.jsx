import React from 'react'
import PropTypes from 'prop-types'
import { UserRow } from './UserRow/UserRow'
import { userSchema, setSortBy, toggleSortIsDesc, setSelectedId } from '../../../redux/tableReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSortIsDesc,
  getSortBy,
  getTableHeaders,
  getHasError,
  getIsFetching,
} from '../../../redux/selectors'

export const Table = ({ users }) => {
  const dispatch = useDispatch()
  const sortIsDesc = useSelector(getSortIsDesc)
  const sortBy = useSelector(getSortBy)
  const hasError = useSelector(getHasError)
  const isFetching = useSelector(getIsFetching)
  const headers = useSelector(getTableHeaders)

  const handleHeaderClick = header => {
    dispatch(setSortBy(header))
    dispatch(toggleSortIsDesc())
  }

  const handleRowFocus = userId => dispatch(setSelectedId(userId))
  if (hasError) return <h1>Ooops... Something went wrong....</h1>
  if (isFetching) return <Preloader />
  return (
    <table>
      <thead>
        <tr>
          {headers.map(h => (
            <th key={h} onClick={() => handleHeaderClick(h)}>
              {h}
              <span className={sortIsDesc && sortBy === h ? '' : ''}>▼</span>{' '}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!users.length && (
          <tr>
            <th>Empty</th>
          </tr>
        )}
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
