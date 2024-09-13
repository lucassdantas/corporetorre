import { Carousel } from '@/components/Carousel'
import { Section } from '@/components/Section'
import { SuperTitle } from '@/components/SuperTitle'
import { Title } from '@/components/Title'
import { testimonials } from '@/utils/informations/testimonials'
import React from 'react'

export const Testimonials = () => {
  return (
    <Section className='py-32 text-center'>
      <SuperTitle className='text-dark-blue-corpore'>Depoimentos</SuperTitle>
      <Title className='mb-12'>A opinião dos nossos clientes</Title>
      <Carousel>
        {testimonials.map((testimonial, i) => (
          <div key={i} className='italic min-h-[112px] flex flex-col justify-center'>
            <p className='text-lg'>{testimonial.content}</p>
          </div>
        ))}
      </Carousel>
    </Section>
  )
}
