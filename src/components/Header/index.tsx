import React from 'react'
import { maxWidth } from '../../utils/max-width'
export const Header = () => {
  return (
    <header>
      <div className={`max-w-${maxWidth}`}>
        
        <div className="flex">
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
        </div>

        <div className="flex">
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </header>
  )
}
