import { whatsApp } from "@/utils/informations/contact-info"
import { BsWhatsapp } from "react-icons/bs"

export const FloatButton = () => {
  return (
    <a href={whatsApp.url} target='_blank' className='fixed lg:bottom-4 lg:right-4 bottom-12 right-12 transition ease-in-out hover:scale-110'>
      <div className='bg-green-wpp p-4 w-fit rounded-full text-white cursor-pointer'>
        <BsWhatsapp className='text-4xl'/>
      </div>
    </a>
  )
}
