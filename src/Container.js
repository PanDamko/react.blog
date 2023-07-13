import React from 'react'

const container = ({children}) => {
  return (
    <div className='container'>
    <h2>tytuł karty</h2>
    {children}
    </div>
  )
}

export default container