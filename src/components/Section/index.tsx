import { Limiter } from '@/components/Limiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  limiterClassname?:string,
}
export const Section = ({children, className='', limiterClassname=''}:SectionProps) => {
  return (
  <section className={`${className}`}>
    <Limiter className={limiterClassname}>
      {children}
    </Limiter>
  </section>
  )
}
