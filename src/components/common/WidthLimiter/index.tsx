import React from 'react'
import { maxWidth } from '../../../utils/max-width'

type WidthLimiterProps = {
    children:React.ReactNode;
    classList?:string;
}
export const WidthLimiter = ({children, classList = 'flex flex-col items-center w-full'}:WidthLimiterProps) => {
  return (
    <section className={classList}>
        <div className={'max-w-['+maxWidth+'px] w-full'}>
            {children}
        </div>
    </section>
  )
}
