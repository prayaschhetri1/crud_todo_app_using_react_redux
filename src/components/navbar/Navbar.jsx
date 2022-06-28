import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    <div style={{padding:"15px 0px 15px 0px"}}>
        <Link to="/">
          <button>HOME</button>
        </Link>
        
    </div>
    <hr />
    </>
  )
}

export default Navbar