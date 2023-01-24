import React from 'react'
import "./banner.component.css";

function Banner() {
  function truncate (string,n){
  return string?.length > n ? string.substr(0,n-1) + '....' :string
  }
  return (
   <header className='Banner' >
    <div className='Banner_content' >
      <h1 className='Banner_title' >Movie name</h1>
      <div className='Banner_buttons' >
        <button className='Banner_button' >Play</button>
        <button className='Banner_button' >My List</button>
      </div>
      <h1 className='Banner_description' >{truncate(`This is the movie description.this is the movie ofmgjfsgijfghfgjmh  fdh dhfdjshfnhkdshf
      hfghgfifumgijfgiohjighjkigkjhikg,h,jgklklkglhk,l khoiohkfgiohkifjijhijhifjigjmihjigjmhifdhj,hoijfimjhi jhijfgihjmibiui iuim
      hgjrvmiojkj,jgbk,jkfbjk  hkjkgh,jbgihmbkgjhkj ih,vbgjhimigbjhjhbijmihj hjmbghiijmhifhi`,150)} </h1>
    </div>
    <div className='Banner_fade_button' />
    </header>
  )
}

export default Banner;