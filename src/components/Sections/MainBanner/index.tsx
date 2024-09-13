import { Button } from '@/components/common/Button'
import { Section } from '@/components/Section'
import { SuperTitle } from '@/components/SuperTitle'

export const MainBanner = () => {
  return (
    <Section className={'flex flex-col items-center w-full bg-blue-300 mainBanner bg-[url("/images/quiropraxia-corporetorre.jpg")] bg-no-repeat bg-cover overlay bg-blend-darken'}>
        <div className="flex w-full justify-between text-sm items-center h-[90vh] max-h-[670px] text-white">
          <div className="flex items-center lg:items-start flex-col py-4 w-4/4">
            <SuperTitle>Bem vindo a Corpore </SuperTitle>
            <h2 className='text-6xl font-bold mb-4'>Excelência em atendimento com diversas especialidades.</h2>
            <p className='text-lg'>{`Agende sua Quiropraxia e melhore da sua dor nas costas.`}</p>
            <p className='text-lg mb-4'>{`Volte a ter seu conforto agendando sua Quiropraxia`}</p>
            <Button/>
          </div>
          <div className="flex flex-col py-4 w-1/2 items-center ">
          </div>
        </div>
    </Section>
  )
}
