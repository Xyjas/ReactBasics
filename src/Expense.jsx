import React from 'react'
import { useHistory } from 'react-router'
import './Expense.css'

export default function Expense({ expense, removeExpense }) {
  const history = useHistory()
  return (
    <div className="expense">
      {`name: ${expense.name}, amount: ${expense.amount}`}
      <button onClick={() => removeExpense(expense._id)}>Remove</button>
      <button onClick={() => history.push(`/expense/${expense._id}`)}>
        Details
      </button>
    </div>
  )
}
