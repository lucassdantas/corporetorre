import { ContactForm } from '@/components/ContactForm'
import { Section } from '@/components/Section'
import Image from 'next/image'
import React from 'react'
import { Title } from '@/components/Title'
import personRelaxing from '@/assets/pessoa-relaxando-corporetorre.jpg'

export const Contact = () => {
  return (
    <Section className='bg-gray-200 py-24'>
      <div className='flex rounded-xl gap-8'>
        <div className='w-1/2 flex flex-col bg-white rounded-xl shadow-md  p-6'>
          <Title className='mb-4'>Fale conosco</Title>
          <ContactForm/>
        </div>  
        <div className='w-1/2 flex flex-col justify-center p-6 '>
          <Image src={personRelaxing} alt='logotipo' className='rounded-xl shadow-lg h-[80%] object-cover'/>
        </div>  
      </div>
    </Section>
  )
}
