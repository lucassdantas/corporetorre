import { Button } from '@/components/common/Button'
import { ServiceType } from '@/types/ServiceType'
import React from 'react'

interface serviceCardProps extends ServiceType{
  className?:string
}
export const ServiceCard = ({media, name, description, className}:serviceCardProps) => {
  return (
    <div className={`bg-white rounded-lg p-4 text-black ${className}`}>
      <img src={media} alt={`Serviço de ${name}`} className='rounded-lg'/>
      <h3 className='font-bold'>{name}</h3>
      <p>{description}</p>
      <Button/>
    </div>
  )
}
