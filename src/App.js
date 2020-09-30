import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Content from './Content'
import DarkThemeContext from './DarkThemeContext'
import Navbar from './Navbar'

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const contextValue = { darkTheme, setDarkTheme }
  return (
    <Router>
      <DarkThemeContext.Provider value={contextValue}>
        <div className="App">
          <Navbar />
          <Content />
        </div>
      </DarkThemeContext.Provider>
    </Router>
  )
}

export default App
