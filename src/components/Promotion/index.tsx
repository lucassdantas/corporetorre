import React from 'react'
import { WidthLimiter } from '../common/WidthLimiter'
import { Button } from '../common/Button'

export const Promotion = () => {
  return (
    <WidthLimiter>
      <div className="flex w-full justify-between text-sm items-center h-[90vh] max-h-[670px] text-gray-800">
          <div className="flex flex-col py-4 w-1/2">
            <h2 className='text-4xl font-bold'>Excelência em atendimento com diversas especialidades.</h2>
            <p className='whitespace-pre-wrap my-12 text-base'></p>
            <Button/>
          </div>
          <div className="flex flex-col py-4 w-1/2 items-center ">
          </div>
        </div>
    </WidthLimiter>
  )
}
