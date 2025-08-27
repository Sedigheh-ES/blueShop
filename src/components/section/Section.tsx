import React, { Children, ReactNode } from 'react'

interface props{
  children: ReactNode;
}
export default function Section({children}:props) {
  return (
      <div className='container mt-[10px]'>
          {children}
      </div>
  )
}
