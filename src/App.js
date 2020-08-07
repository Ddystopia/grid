import React from 'react'
import { Nav } from './components/Nav/Nav'
import './App.css'
import { Main } from './components/Main/Main'
import { UserInfo } from './components/UserInfo/UserInfo'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <UserInfo />
    </div>
  )
}

export default App
