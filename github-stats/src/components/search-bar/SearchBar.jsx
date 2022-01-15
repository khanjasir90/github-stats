import React from 'react'
import { useState } from 'react'
import './SearchBar.css'
function SearchBar() {
    const URL = 'https://api.github.com/users/'
  const [username,setUsername] = useState('khanjasir90')
  const [userData,setUserData] = useState([])
  
  const getUserDetails = async () => {
    alert(username)
    const response = await fetch(URL+username)
    if(response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Enter your github username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <button onClick={getUserDetails}>go!</button>
      </div>
    </div>
  )
}

export default SearchBar
