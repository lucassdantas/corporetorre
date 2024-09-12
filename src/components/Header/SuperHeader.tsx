import { address, email, socialMedia, whatsApp } from '@/utils/informations/contact-info'
import { maxWidth } from '@/utils/max-width'
import React from 'react'
import { CiFacebook, CiMail } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'

export const SuperHeader = () => {
  return (
  <div className={'flex flex-col items-center w-full shadow-sm border-b-2'}>
    <div className={'max-w-['+maxWidth+'px] w-full'}>
      <div className="flex w-full justify-between text-sm items-center">

        <div className="flex flex-col">
          <ul className='flex gap-4 text-black' >
            <li><a href={email.url} target='_blank' className='flex gap-2 items-center'><CiMail />{email.info}</a></li>
            <li><a href={whatsApp.url} target='_blank' className='flex gap-2 items-center'><IoLogoWhatsapp />{whatsApp.info}</a></li>
            <li><a href={address.url} target='_blank' className='flex gap-2 items-center'><LuMapPin />Av. Dom Hélder Câmara, 5200 – salas 512/513 – Cachambi</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center align-middle py-4 ">
          <ul className='flex gap-2 text-black'>
            <li><a href={socialMedia.facebook.url}><CiFacebook   className='text-xl' /></a></li>
            <li><a href={socialMedia.instagram.url}><FaInstagram className='text-xl'/></a></li>
          </ul>
        </div>

      </div>

    </div>
  </div>
  )
}
