import React from 'react'
import { getSelectedUser } from '../../../redux/selectors'
import { useSelector } from 'react-redux'

export const UserInfo = () => {
  const user = useSelector(getSelectedUser)
  if (!user) return null
  const { id, firstName, lastName, address, description } = user
  return (
    <section>
      <p>
        User selected:
        <b>
          {`${firstName} ${lastName}`}({id})
        </b>
      </p>
      <p>
        Description:
        <textarea value={description || '-'} />
      </p>
      <p>
        Residence address: <b>{address.streetAddress || '-'}</b>
      </p>
      <p>
        City: <b>{address.city || '-'}</b>
      </p>
      <p>
        Province / State: <b>{address.state || '-'}</b>
      </p>
      <p>
        Index: <b>{address.zip || '-'}</b>
      </p>
    </section>
  )
}
