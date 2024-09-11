import { Limiter } from '@/components/Limiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string
}
export const Section = ({children, className=''}:SectionProps) => {
  return (
  <section className={`${className}`}>
    <Limiter>
      {children}
    </Limiter>
  </section>
  )
}
