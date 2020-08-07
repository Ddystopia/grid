import React from 'react'
import { Button } from './Button/Button'
import classNames from './Header.module.css'
import { useDispatch } from 'react-redux'
import { setIsLarge } from '../../redux/tableReducer'

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className={classNames.loadBlock}>
      <Button text="Load Large" onClick={() => dispatch(setIsLarge(true))} />
      <Button text="Load Few" onClick={() => dispatch(setIsLarge(false))} />
    </header>
  )
}
