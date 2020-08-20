import React, { useState } from 'react'

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    addExpense({ name, amount })
    setAmount(0)
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name: </p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <p>Amount: </p>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
}
