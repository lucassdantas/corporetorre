import { Button } from '@/components/common/Button'
import { Section } from '@/components/Section'
import promotionVIdeo from '@/assets/videos/promocao-junho.mp4'
import NextVideo from 'next-video'
export const Promotion = () => {
  const promotionMonth = 'Junho'
  return (
    <Section>
      <div className="flex w-full justify-between text-sm items-center py-12 text-gray-800">
          <div className="flex flex-col py-4 w-1/2">
            <h2 className='text-4xl font-bold'>Promoção do Mês: {promotionMonth}</h2>
            <p className='whitespace-pre-wrap my-12 text-base'>
{`Aproveite nossa incrível promoção de ${promotionMonth}! 
Neste mês, estaremos oferecendo descontos especiais em todos os nossos serviços de quiropraxia, RPG e acupuntura. É a oportunidade perfeita para cuidar da sua saúde e bem-estar com os melhores profissionais. Não perca essa chance! Fique atento às nossas promoções mensais e agende sua consulta hoje mesmo. Sua saúde merece!`
}
            </p>
            <Button/>
          </div>
          <div className="flex flex-col py-4 w-1/2 items-center ">
            <video controls className='h-[612px]'>
              <source src={`/videos/promocao-junho.mp4`} type='video/mp4'/>
            </video>
          </div>
        </div>
    </Section>
  )
}
