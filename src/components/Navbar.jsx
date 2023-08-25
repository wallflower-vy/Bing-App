import React from 'react'
import Add from "../img/add.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Bing</span>
      <div className="user">
        {/* <img src={currentUser.photoURL} alt="" /> */}
        <img src={Add} />
        <span>
            john
            {/* {currentUser.displayName} */}
            </span>
        <button 
        // onClick={()=>signOut(auth)}
        >
            logout
            </button>
      </div>
    </div>
  )
}

export default Navbar