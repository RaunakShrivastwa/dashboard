import React from 'react'

function RenderProject({ url }) {
  return (
      <div className='text-light w-100 h-auto'>
          <iframe className='w-100 vh-100' src={url} title="description"></iframe>
      </div>
  )
}

export default RenderProject