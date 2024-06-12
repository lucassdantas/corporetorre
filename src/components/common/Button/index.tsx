import { IoLogoWhatsapp } from "react-icons/io5";
import {phoneNumber} from '../../../utils/contact-info'

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
}

export const Button = ({content = 'Agende sua consulta', url = phoneNumber.whatsApp.url, target='_blank', fontSize='base'}:ButtonProps) => {
  return (
    <div className="flex max-w-[280px]  bg-green-500 rounded-full py-3 px-5 text-white font-bold items-center text-center justify-center gap-2 shadow-sm hover:bg-green-400">
        <IoLogoWhatsapp className='text-xl'/>
        <a className={`text-${fontSize} uppercase`} href={url} target={target}>{content}</a>
    </div>
  )
}
