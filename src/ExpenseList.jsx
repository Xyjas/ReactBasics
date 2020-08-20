import React from 'react'
import Expense from './Expense'

export default function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.map(expense => <Expense expense={expense} />
      )}
    </div>
  )
}


