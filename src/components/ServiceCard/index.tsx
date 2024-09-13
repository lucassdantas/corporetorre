import { Button } from '@/components/common/Button'
import { ServiceType } from '@/types/ServiceType'
import Image from 'next/image';
import React from 'react'

interface serviceCardProps extends ServiceType{
  className?:string;
  isMediaVideo:boolean;
}
export const ServiceCard = ({media, name, description, isMediaVideo, mediaUrl, className}:serviceCardProps) => {
  return (
    <div className={`flex flex-col justify-between bg-white rounded-lg p-4 text-black gap-4 ${className}`}>
      <div>
        {!isMediaVideo && media    && <Image src={media} alt={`Serviço de ${name}`} className='rounded-lg h-[284px] object-cover'/>}
        {isMediaVideo  && mediaUrl &&  <video controls className="w-full h-[284px] object-cover rounded-lg mb-6 shadow-lg"><source src={mediaUrl} type="video/mp4" ></source></video>}
        <h3 className='font-bold text-xl my-4'>{name}</h3>
        <p>{description}</p>
      </div>
      <Button/>
    </div>
  )
}
