'use client'
import { Section } from '@/components/Section'
import React, { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'

export const Infos = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() 
        }
      },
      {
        threshold: 0.5, 
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <Section className='bg-dark-blue-corpore'>
      <div className="flex text-white py-12" ref={sectionRef}>
        <div className='w-1/3 flex flex-col text-center items-center justify-center'>
          <span className='font-bold text-4xl'>+ {isVisible && <CountUp end={52000} duration={3} separator="." />}</span>
          <span className='text-lg'>pacientes atendidos</span>
        </div>
        <div className='w-1/3 flex flex-col text-center items-center justify-center'>
          <span className='font-bold text-4xl'>+ {isVisible && <CountUp end={15} duration={4} />}</span>
          <span className='text-lg'>Anos de experiência</span>
        </div>
        <div className='w-1/3 flex flex-col text-center items-center justify-center'>
          <span className='font-bold text-4xl'>+ {isVisible && <CountUp end={15} duration={5} />}</span>
          <span className='text-lg'>especialistas</span>
        </div>
      </div>
    </Section>
  )
}
