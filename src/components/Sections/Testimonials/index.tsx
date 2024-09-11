import { Carousel } from '@/components/Carousel'
import { Section } from '@/components/Section'
import { testimonials } from '@/utils/informations/testimonials'
import React from 'react'

export const Testimonials = () => {
  return (
    <Section className='text-center'>
      <span>Depoimentos</span>
      <h2 className='font-bold text-2xl mb-12'> A opinião dos nossos clientes</h2>
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
