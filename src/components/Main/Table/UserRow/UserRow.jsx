import React from 'react'
import PropTypes from 'prop-types'

export const UserRow = ({ user, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
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
  }),

  onClick: PropTypes.func,
}
