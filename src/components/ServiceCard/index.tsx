import { Button } from '@/components/common/Button'
import { ServiceType } from '@/types/ServiceType'
import React from 'react'

interface serviceCardProps extends ServiceType{
  className?:string
}
export const ServiceCard = ({media, name, description, className}:serviceCardProps) => {
  return (
    <div className={`flex flex-col justify-between bg-white rounded-lg p-4 text-black gap-4 ${className}`}>
      <div>
        <img src={media} alt={`Serviço de ${name}`} className='rounded-lg'/>
        <h3 className='font-bold text-lg'>{name}</h3>
        <p>{description}</p>
      </div>
      <Button/>
    </div>
  )
}
