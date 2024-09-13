import React, { ReactNode } from 'react'


export const SuperTitle = ({children, className=''}:{children:ReactNode, className?:string}) => {
  return (<span className={`font-bold italic text-lg ${className}`}>{children}</span>)
}
