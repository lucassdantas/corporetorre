import { Button } from '@/components/common/Button'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'

export const Promotion = () => {
  const promotionMonth = 'Junho'
  return (
    <Section>
      <div className="flex flex-col items-center w-full py-12 text-gray-800 gap-6">
        <Title className='text-center'>Promoção do Mês: {promotionMonth}</Title>
        <div className="w-full max-w-[350px] bg-white">
          <video controls className="w-full h-auto rounded-lg mb-6 shadow-lg">
            <source src={`/videos/promocao-junho.mp4`} type="video/mp4" />
          </video>
          <Button />
        </div>
      </div>
    </Section>
  )
}
