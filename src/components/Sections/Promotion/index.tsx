import { Button } from '@/components/common/Button'
import { Section } from '@/components/Section'

export const Promotion = () => {
  const promotionMonth = 'Junho'
  return (
    <Section>
      <div className="flex flex-col items-center w-full py-12 text-gray-800 gap-6">
        <h2 className="text-4xl font-bold text-center">Promoção do Mês: {promotionMonth}</h2>
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
