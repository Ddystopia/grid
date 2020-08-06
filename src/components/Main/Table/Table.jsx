import React from 'react'
import PropTypes from 'prop-types'
import { UserRow } from './UserRow/UserRow'

export const Table = ({ users: data, isDesc, sortBy }) => {
  const users = data.sort((a, b) => {
    const sortNum = a[sortBy] > b[sortBy] ? 1 : -1
    if (isDesc) return -sortNum
    return sortNum
  })
  const headers = Object.keys(users[0])

  const handleHeaderClick = (/* header */) => {}
  const handleRowClick = (/* userId */) => {}

  return (
    <table>
      <tr>
        {headers.map(h => (
          <th key={h} onClick={() => handleHeaderClick(h)}></th>
        ))}
      </tr>
      {users.map(user => (
        <UserRow user={user} onClick={() => handleRowClick(user.id)} key={user.id} />
      ))}
    </table>
  )
}

Table.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: {
        streetAddress: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
      },
      description: PropTypes.string.isRequired,
    })
  ),
  isDesc: PropTypes.bool,
  sortBy: PropTypes.string,
}

Table.defaultProps = {
  isDesc: false,
  sortBy: 'id',
}
