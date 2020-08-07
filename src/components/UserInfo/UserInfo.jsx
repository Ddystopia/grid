import React from 'react'
import classNames from './UserInfo.module.css'
import { getSelectedUser } from '../../redux/selectors'
import { useSelector } from 'react-redux'

export const UserInfo = () => {
  const user = useSelector(getSelectedUser)
  if (!user) return null
  const { id, firstName, lastName, address, description } = user
  return (
    <section className={classNames.userInfo}>
      <div>
        User selected:
        <b>
          {`${firstName} ${lastName}`}({id})
        </b>
      </div>
      <div>
        Description: <textarea value={description || '-'} readOnly />
      </div>
      <div>
        Residence address: <b>{address.streetAddress || '-'}</b>
      </div>
      <div>
        City: <b>{address.city || '-'}</b>
      </div>
      <div>
        Province / State: <b>{address.state || '-'}</b>
      </div>
      <div>
        Index: <b>{address.zip || '-'}</b>
      </div>
    </section>
  )
}
