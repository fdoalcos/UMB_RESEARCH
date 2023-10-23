import React, { useState } from 'react'

function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault()
      if (newItem == "") return

      onSubmit(newItem)

      setNewItem("")
    }
  return (
    <form 
      onSubmit={handleSubmit} 
      className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" 
          />
          <button className="btn">Add</button>
        </div>
    </form>
  )
}

export default NewTodoForm