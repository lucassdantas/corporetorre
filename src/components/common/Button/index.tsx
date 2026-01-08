import { IoLogoWhatsapp } from "react-icons/io5";
import {phoneNumber, whatsApp} from '@/utils/informations/contact-info'

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
  className?:string;
}

export const Button = ({content = 'Agendar consulta', url = whatsApp.url, target='_blank', fontSize='base', className=''}:ButtonProps) => {
  return (
    <a href={url} target={target} className={"flex relative p-3  bg-green-500 rounded-xl  text-white font-bold items-center text-center justify-center gap-2 shadow-sm hover:bg-green-400 cursor-pointer transition duration-300 hover:scale-110 " + className}>
      <IoLogoWhatsapp className='text-xl'/> <span className={`text-${fontSize} uppercase`}>{content}</span>
    </a>
  )
}
