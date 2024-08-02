import React, { useState } from 'react'

function Footer(props) {

  const { showModal, handleToggleModal, data } = props


  return (
    <footer>
      <div className="bgGradient"></div>
        <div>
            <h2>{data?.title}</h2>
            <br /> <br />
          <h1>APOD PROJECT</h1>
        </div>
          <button onClick={handleToggleModal}><i className="fa-solid fa-circle-info"></i></button>
        <br />
        <br />
    </footer>
  )
}

export default Footer