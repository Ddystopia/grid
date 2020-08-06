import React from 'react'
import { Button } from './Button/Button'
import classNames from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={classNames.loadBlock}>
        <Button text="Load Big" />
        <Button text="Load Few" />
      </div>
      <Button text="Add row" />
    </header>
  )
}
