import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'

export default function ExpenseWrapper() {
  const initialExpenses = [
    { name: 'kovork', amount: 120 },
    { name: 'phone', amount: 500 },
  ]
  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }
  return (
    <div>
      <ExpenseForm addExpense={(expense) => addExpense(expense)} />
      <ExpenseList expenses={expenses} />
    </div>
  )
}
