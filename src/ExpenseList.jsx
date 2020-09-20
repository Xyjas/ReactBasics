import React from 'react'
import Expense from './Expense'

export default function ExpenseList({ expenses, removeExpense }) {
  return (
    <div>
      {expenses.map(expense => <Expense key={expense.id} expense={expense} removeExpense={removeExpense} />
      )}
    </div>
  )
}


