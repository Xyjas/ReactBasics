import React from 'react'

export default function Expense({ expense }) {
  return (
    <div>
      {`name: ${expense.name}, amount: ${expense.amount}`}
    </div>
  )
}
