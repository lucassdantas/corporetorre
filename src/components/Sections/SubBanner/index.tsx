import { Section } from '@/components/Section';
import { maxWidth } from '@/utils/max-width'
import { CiMedicalCross } from "react-icons/ci";

export const SubBanner = () => {
  return (
    <Section className={'flex flex-col items-center w-full'}>
      <div className="flex w-full justify-between items-center text-sm  lg:mt-[-32px] text-white  gap-8">
        <div className="flex flex-col py-4 w-1/3 items-center justify-start text-center p-14  bg-blue-corpore rounded-xl shadow-lg ">
          <CiMedicalCross className='text-xl' />
          <h4 className='text-lg font-bold mb-2'>Quiropraxia</h4>
          <p className='text-base'>Ajusta a coluna para aliviar dores e melhorar a função nervosa.</p>
        </div>

        <div className="flex flex-col py-4 w-1/3 items-center justify-start text-center p-14  bg-blue-corpore rounded-xl shadow-lg ">
          <CiMedicalCross className='text-xl' />
          <h4 className='text-lg font-bold mb-2'>RPG</h4>
          <p className='text-base'>Corrige a postura e trata desequilíbrios musculares.</p>   
        </div>

        <div className="flex flex-col py-4 w-1/3 items-center justify- text-center p-14  bg-blue-corpore rounded-xl shadow-lg   ">
          <CiMedicalCross className='text-xl' />
          <h4 className='text-lg font-bold mb-2'>Acupuntura</h4>
          <p className='text-base'>Usa agulhas para promover equilíbrio energético e aliviar dores.</p>
        </div>
      </div>
    </Section>
  )
}
