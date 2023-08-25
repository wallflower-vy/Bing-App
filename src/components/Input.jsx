import React from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img (1).png'
const Input = () => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        // onChange={(e) => setText(e.target.value)}
        // value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          // onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button 
        // onClick={handleSend}
        >
          Send</button>
      </div>
    </div>
  )
}

export default Input