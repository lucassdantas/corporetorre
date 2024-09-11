import { IoLogoWhatsapp } from "react-icons/io5";
import {phoneNumber} from '../../../utils/informations/contact-info'

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
}

export const Button = ({content = 'Agende sua consulta', url = phoneNumber.whatsApp.url, target='_blank', fontSize='base'}:ButtonProps) => {
  return (
    <a href={url} target={target} className="flex max-w-[280px]  bg-green-500 rounded-full py-3 px-5 text-white font-bold items-center text-center justify-center gap-2 shadow-sm hover:bg-green-400 cursor-pointer">
        <IoLogoWhatsapp className='text-xl'/>
        <span className={`text-${fontSize} uppercase`}>{content}</span>
    </a>
  )
}
