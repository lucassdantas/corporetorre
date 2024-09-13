import { Carousel } from '@/components/Carousel'
import { Section } from '@/components/Section'
import { SuperTitle } from '@/components/SuperTitle'
import { Title } from '@/components/Title'
import { testimonials } from '@/utils/informations/testimonials'
import React from 'react'

export const Testimonials = () => {
  return (
    <Section className='py-12 text-center'>
      <SuperTitle className='text-dark-blue-corpore'>Depoimentos</SuperTitle>
      <Title className='mb-12'>A opinião dos nossos clientes</Title>
      <Carousel>
        {testimonials.map((testimonial, i) => (
          <div key={i} className='italic'>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </Carousel>
    </Section>
  )
}
