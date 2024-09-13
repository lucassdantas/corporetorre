import { ContactForm } from '@/components/ContactForm'
import { Section } from '@/components/Section'
import Image from 'next/image'
import React from 'react'
import { Title } from '@/components/Title'
import personRelaxing from '@/assets/pessoa-relaxando-corporetorre.jpg'

export const Contact = () => {
  return (
    <Section className='bg-gray-200 py-24' id='contato'>
      <div className='flex lg:flex-row flex-col-reverse rounded-xl gap-8'>
        <div className='w-full lg:w-1/2 flex flex-col bg-white rounded-xl shadow-md  p-6'>
          <Title className=''>Fale conosco</Title>
          <p className='mb-4'>Envie-nos uma mensagem, responderemos o quanto antes</p>
          <ContactForm/>
        </div>  
        <div className='w-full lg:w-1/2 flex flex-col justify-center p-6 '>
          <Image src={personRelaxing} alt='logotipo' className='rounded-xl shadow-lg h-[80%] object-cover'/>
        </div>  
      </div>
    </Section>
  )
}
