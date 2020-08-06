import React from 'react'
import PropTypes from 'prop-types'

export const UserInfo = ({ selectedId }) => {
  const { id, firstName, lastName, address, description } = { id: selectedId }
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
        <textarea>{description}</textarea>
      </p>
      <p>
        Residence address: <b>{address.streetAddress}</b>
      </p>
      <p>
        City: <b>{address.city}</b>
      </p>
      <p>
        Province / State: <b>{address.state}</b>
      </p>
      <p>
        Index: <b>{address.zip}</b>
      </p>
    </section>
  )
}

UserInfo.propTypes = {
  selectedId: PropTypes.number.isRequired,
}
