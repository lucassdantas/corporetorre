'use client'
import { Button } from '@/components/common/Button'
import { ServiceType } from '@/types/ServiceType'
import Image from 'next/image';
import React, { useState } from 'react'

interface serviceCardProps extends ServiceType{
  className?:string;
  isMediaVideo:boolean;
}

export const ServiceCard = ({ media, name, description, isMediaVideo, mediaUrl, className }: serviceCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const shortDescription = description.length > 50 ? description.substring(0, 100) + "..." : description;

  return (
    <div className={`flex flex-col justify-between bg-white rounded-lg p-4 text-black gap-4 ${className}`}>
      <div>
        {!isMediaVideo && media && (
          <Image src={media} alt={`Serviço de ${name}`} className="rounded-lg h-[284px] object-cover w-full" />
        )}
        {isMediaVideo && mediaUrl && (
          <video controls className="w-full h-[284px] object-cover rounded-lg mb-6 shadow-lg">
            <source src={mediaUrl} type="video/mp4" />
          </video>
        )}
        <h3 className="font-bold lg:text-start text-center text-xl my-4">{name}</h3>
        <div className="lg:text-start text-center">
          <div dangerouslySetInnerHTML={{ __html: showFullDescription ? description : shortDescription }} />
          {description.length > 50 && (
            <button 
              className="text-blue-500 hover:underline mt-2" 
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};
