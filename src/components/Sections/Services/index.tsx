import { ServiceType } from '@/types/ServiceType';
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard';
import { SuperTitle } from '@/components/SuperTitle';
import { servicesContent } from '@/utils/servicesContent';

export const Services = () => {
  return (
    <Section className='bg-gray-100 py-12' id='servicos'>
      <div className="flex w-full justify-center items-center mb-4 text-gray-800">
        <div className="flex flex-col py-4 w-full items-center text-center">
          <SuperTitle className='text-dark-blue-corpore'>Nossos serviços</SuperTitle>
          <h2 className='text-4xl font-bold'>Confira nossas especialidades</h2>
          <p className='text-base'>A Corpore possui especialistas em diversas áreas além da Quiropraxia.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {servicesContent.map((service:ServiceType, i) => <ServiceCard key={i} media={service.media} name={service.name} mediaUrl={service.mediaUrl} isMediaVideo={service.mediaIsVideo? service.mediaIsVideo: false} description={service.description} className='lg:w-[30%] sm:w-[40%] w-full'/>)}
      </div>
    </Section>
  )
}
