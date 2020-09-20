import React from 'react'
import './Expense.css'


export default function Expense({ expense, removeExpense }) {
  return (
    <div className="expense">
      {`name: ${expense.name}, amount: ${expense.amount}`}
      <button onClick={() => removeExpense(expense.id)}>Remove</button>
    </div>
  )
}
