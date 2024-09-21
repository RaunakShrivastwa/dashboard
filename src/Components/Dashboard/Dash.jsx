import React from 'react'
import { Link } from 'react-router-dom'

function Dash() {
  return (
    <div className='bg-danger'>
      {/* jelo */}
      <Link to={'/hel'}>Hello</Link>
    </div>
  )
}

export default Dash