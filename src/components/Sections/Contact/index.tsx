import { ContactForm } from '@/components/ContactForm'
import { Section } from '@/components/Section'
import Image from 'next/image'
import React from 'react'
import logotipo from '@/assets/logo-corpore.png'
export const Contact = () => {
  return (
    <Section>
      <div className='flex'>
        <div className='1/2'>
          <h2>Fale conosco</h2>
          <ContactForm/>
        </div>  
        <div className='1/2'>
          <Image src={logotipo} alt='logotipo'/>
        </div>  
      </div>
    </Section>
  )
}
