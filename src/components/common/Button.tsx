import { IoLogoWhatsapp } from "react-icons/io5";

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
}
export const Button = ({content = 'Agende sua consulta', url ='a', target='_blank'}:ButtonProps) => {
  return (
    <div className="flex bg-green-500 rounded-full py-3 px-5 text-white font-bold items-center gap-2 shadow-sm hover:bg-green-400">
        <IoLogoWhatsapp className='text-xl'/>
        <a className='text-base uppercase' href={url} target={target}>{content}</a>

    </div>
  )
}
