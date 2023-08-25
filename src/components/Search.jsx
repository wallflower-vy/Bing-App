import React from 'react'
import Add from "../img/add.png"

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown={handleKey}
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>} */}
      {/* {user && ( */}
        <div className="userChat" 
        // onClick={handleSelect}
        >
          {/* <img src={user.photoURL} alt="" /> */}
          <img src={Add} alt="" />
          
          <div className="userChatInfo">
            <span>jane</span>
            {/* <span>{user.displayName}</span> */}
          </div>
        </div>
      {/* )} */}
    </div>
  )
}

export default Search