import { maxWidth } from '@/utils/max-width'
import image from '@/assets/logo-corpore.png'
import { Button } from '@/components/common/Button'
import {address, email, socialMedia, phoneNumber} from '@/utils/informations/contact-info'
import { CiFacebook, CiMail  } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { Limiter } from '@/components/Limiter';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className='text-black'>
      <Limiter>
      <div className={'flex flex-col items-center w-full shadow-sm border-b-2'}>
        <div className={'max-w-['+maxWidth+'px] w-full'}>
          <div className="flex w-full justify-between text-sm items-center">

            <div className="flex flex-col">
              <ul className='flex gap-4 text-black' >
                <li><a href={email.url} target='_blank' className='flex gap-2 items-center'><CiMail />{email.info}</a></li>
                <li><a href={phoneNumber.whatsApp.url} target='_blank' className='flex gap-2 items-center'><IoLogoWhatsapp />{phoneNumber.whatsApp.info}</a></li>
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

      <div className={'flex flex-col items-center'}>
        <div className={'max-w-['+maxWidth+'px] w-full'}>
          <div className="flex w-full py-1">

            <div className="flex flex-col w-1/5 items-start">
              <Image src={image} alt='image' className='w-full max-w-[150px]'/>
            </div>

            <div className="flex flex-col w-3/5 justify-center items-center">
              <ul className='flex gap-4 text-black'>
                <li><a href='#servicos'>Serviços</a></li>
                <li><a href='#sobre'>Sobre nós</a></li>
                <li><a href='#contato'>Fale conosco</a></li>
              </ul>
            </div>

            <div className="flex flex-col w-1/5 justify-center items-end">
              <Button fontSize='sm'/>
            </div>

          </div>
        </div>
      </div>
      </Limiter>

    </header>
  )
}
