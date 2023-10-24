import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Chat Chit</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <i class="fa-solid fa-right-from-bracket fa-xl" onClick={()=>signOut(auth)}></i>
      </div>
    </div>
  )
}

export default Navbar