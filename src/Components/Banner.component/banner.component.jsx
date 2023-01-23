import React from 'react'
import "./banner.component.css";

function Banner() {
  return (
   <header className='Banner' >
    <div className='Banner_content' >
      <h1 className='Banner_title' >Movie name</h1>
      <div className='Banner_buttons' >
        <button className='Banner_button' >Play</button>
        <button className='Banner_button' >My List</button>
      </div>
      <h1 className='Banner_description' >This is the movie description</h1>
    </div>
    <div className='Banner_fade_button' />
    </header>
  )
}

export default Banner;