import { maxWidth } from '@/utils/max-width'
import image from '@/assets/logo-corpore.png'
import { Button } from '@/components/common/Button'
import {address, email, socialMedia, whatsApp} from '@/utils/informations/contact-info'
import { CiFacebook, CiMail  } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { Limiter } from '@/components/Limiter';
import Image from 'next/image';
import Link from 'next/link';
import { SuperHeader } from '@/components/Header/superHeader';

export const Header = () => {
  return (
    <header >
      <Limiter>
        <SuperHeader/>
        <div className={'flex  items-center'}>
          <div className="flex flex-col w-1/5 items-start">
            <Link href='/'>
              <Image src={image} alt='image' className='w-full max-w-[150px]'/>
            </Link>
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
      </Limiter>

    </header>
  )
}
