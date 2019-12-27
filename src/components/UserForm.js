import React, { useState, useEffect } from 'react'

const UserForm = (props) => {
  const [userName, setUserName] = useState('')

  const handleName = ({ target: { value } }) => setUserName(value)

  return (
    <div>
      Username: <input type="text" value={userName} onChange={handleName} />
    </div>
  )
}

export default UserForm
