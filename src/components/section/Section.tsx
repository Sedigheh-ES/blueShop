import React, { Children, ReactNode } from 'react'

interface props{
  children: ReactNode;
  className?: string;
}
export default function Section({children,className}:props) {
  return (
      <div className={'container mt-[10px]'}>
          {children}
      </div>
  )
}
