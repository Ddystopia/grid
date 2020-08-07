import React from 'react'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import './App.css'
import { Main } from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
