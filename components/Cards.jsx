// import React from 'react'
const cards = ({children,bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shodow-md`}>{children}</div>
  )
}

export default cards