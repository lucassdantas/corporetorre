import { maxWidth } from '../../utils/max-width'
import { Button } from '../common/Button'
import quiropraxiaImg from '../../assets/quiropraxia-profissional-em-paciente.jpg'
export const Banner = () => {
  return (
    <section className={'flex flex-col items-center w-full bg-blue-300'}>
      <div className={'max-w-['+maxWidth+'px] w-full'}>
        
        <div className="flex w-full justify-between text-sm items-center h-[90vh] max-h-[670px] text-gray-800">
          <div className="flex flex-col py-4 w-1/2">
            <h2 className='text-4xl font-bold'>Excelência em atendimento com diversas especialidades.</h2>
            <p className='whitespace-pre-wrap my-12 text-base'>{`Somos referência no mercado da fisioterapia, RPG, 
Acupuntura, Palmilhas e Quiropraxia.

Tem dor nas costas, ombros, hérnia de disco, tensão muscular, postura desregulada e quer solucionar seu problema, voltando a ter o conforto de um postura saudável?
Agende agora sua Quiropraxia`}</p>
              <Button/>
          </div>
          <div className="flex flex-col py-4 w-1/2 items-center ">
            <img src={quiropraxiaImg} alt='Quiropraxia profissional e de qualidade' className='rounded-3xl w-[512px] h-[412px] object-cover shadow-2xl'/>
          </div>
        </div>

      </div>
    </section>
  )
}
