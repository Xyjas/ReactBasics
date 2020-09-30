import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import './Content.css'
import About from './About'
import DarkThemeContext from './DarkThemeContext'
import ExpenseDetails from './ExpenseDetails'
import ExpenseWrapper from './ExpenseWrapper'
import Help from './Help'

export default function Content() {
  const { darkTheme } = useContext(DarkThemeContext)
  return (
    <div className={`${darkTheme ? 'dark' : 'light'}`}>
      <Switch>
        <Route exact path="/" component={ExpenseWrapper} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/expense/:expense_id" component={ExpenseDetails} />
      </Switch>
    </div>
  )
}
