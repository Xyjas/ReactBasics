import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DarkThemeContext from './DarkThemeContext'

export default function Navbar() {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext)
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle theme</button>
    </nav>
  )
}
