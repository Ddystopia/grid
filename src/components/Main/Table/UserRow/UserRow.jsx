import React from 'react'
import PropTypes from 'prop-types'
import { userSchema } from '../../../../redux/tableReducer'

export const UserRow = ({ user, onFocus }) => {
  return (
    <tr onFocus={onFocus} tabIndex={0}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  )
}

UserRow.propTypes = {
  user: userSchema,
  onFocus: PropTypes.func,
}
