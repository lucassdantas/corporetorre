import { Limiter } from '@/components/Limiter'
import { Section } from '@/components/Section'
import logoTipo from '@/assets/logo-corpore.png'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/common/Button'
import { address, phoneNumber, whatsApp, workingTime } from '@/utils/informations/contact-info'
import Link from 'next/link'
import { FaAddressCard, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { BiPhone } from 'react-icons/bi'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='text-white'>
      <Section className='bg-blue-corpore'>
        <div className='flex'>
          <div className="w-2/4 flex flex-col gap-4 lg:pr-[15%]">
            <Image src={logoTipo} alt='Logotipo' className='max-w-[220px]'/>
            <p>Estamos no mercado da fisioterapia e terapia manual há 13 anos e hoje com diversos outros atendimentos especializado como Quiropraxia, Avaliação Postural, Confecções de Palmilhas Posturais, Acupuntura e RPG. </p>
            <Button/>
          </div>
          <div className='w-1/3'>
            <h4>Funcionamento</h4>
            <ul>
              <li>{workingTime.weekDays}</li>
              <li>{workingTime.saturday}</li>
              <li>{workingTime.sunday}</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h4>Contatos</h4>
            <ul>
              <li className='flex gap-4 items-center'><FaMapMarkerAlt className='text-2xl' /><a href={address.url} target='_blank'>{address.info}</a></li>
              <li className='flex gap-4 items-center'><BiPhone/><a href={phoneNumber.phone01.url} target='_blank'>{phoneNumber.phone01.info}</a></li>
              <li className='flex gap-4 items-center'><FaWhatsapp/> <a href={whatsApp.url} target='_blank'>{whatsApp.info}</a></li>
              <li className='flex gap-4 items-center'><Link href={'/politica-de-privacidade'}>Política de privacidade</Link></li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className='bg-dark-blue-corpore'>
        <div className='text-center text-white'>
          <span>© Copyright {currentYear} Corporetorre | Site desenvolvido por <a href='https://www.linkedin.com/in/lucas-de-sousa-dantas/' rel='external' target='_blank' className='font-bold'>Lucas Dantas.</a></span>
        </div>
      </Section>
    </footer>
  )
}
