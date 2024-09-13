import { Button } from '@/components/common/Button'
import { Section } from '@/components/Section'
import { SuperTitle } from '@/components/SuperTitle'
import quiropraxiaImg from '@/assets/quiropraxia-profissional-em-paciente.jpg'
import Image from 'next/image'
import { Title } from '@/components/Title'

export const About = () => {
  return (
    <Section>
      <div className="flex items-center gap-8 text-gray-800 py-24">
        <div className="flex flex-col items-center lg:items-start py-4 w-1/2">
          <SuperTitle className='text-dark-blue-corpore'>Sobre nós</SuperTitle>
          <Title className='mb-6'>Te auxiliamos no alívio da dor</Title>
          <p className='whitespace-pre-wrap mb-4 text-base'>Bem-vindo à Corpore, uma clínica especializada no cuidado e bem-estar do seu corpo. </p>
          <p className='mb-4'>Nossa missão é proporcionar alívio para dores e desconfortos, ajudando você a retomar suas atividades diárias com mais qualidade de vida. </p>
          <p className='mb-4'>Focamos em tratamentos de quiropraxia, oferecendo abordagens personalizadas para corrigir desalinhamentos na coluna e melhorar a postura, aliviando dores crônicas e prevenindo futuras complicações.</p>
          <p className='mb-4'>Na Corpore, acreditamos que a saúde do corpo está diretamente ligada ao seu equilíbrio e bem-estar. </p>
          <p className='mb-8'>Nosso objetivo é cuidar de você de forma integrada, promovendo tratamentos que buscam o alívio imediato e a prevenção a longo prazo. Venha nos conhecer e descubra como podemos ajudá-lo a viver sem dor, com mais saúde e disposição!</p>
          <Button/>
        </div>
        <div className="flex flex-col py-4 w-1/2 items-center bg-dark-blue-corpore pr-4 rounded-lg">
          <Image src={quiropraxiaImg} alt='Exame de quiropraxia' className='rounded-lg h-[500px] object-cover -mb-6 -ml-4'/>
        </div>
      </div>
    </Section>
  )
}
