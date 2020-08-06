import React from 'react'
import PropTypes from 'prop-types'
import classNames from './Button.module.css'

export const Button = ({ text, onClick }) => {
  return (
    <button className={classNames.button} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}
