import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { SuperTitle } from '@/components/SuperTitle'
import { Button } from '@/components/common/Button'
import Image from 'next/image'
import pilatesImg from '@/assets/placeholder.png'

const WHATSAPP_LINK = 'https://wa.me/5521982687398'

export default function page (){
  const currentYear = new Date().getFullYear()

  return (
  <>
    <main className="overflow-x-hidden">

      {/* HERO */}
      <Section className="bg-dark-blue-corpore text-white">
        <div className="flex flex-col items-center text-center py-28 gap-6 max-w-4xl mx-auto">
          <SuperTitle className="text-light-blue-corpore">
            A excelência da Corpore Torre agora tem um novo movimento
          </SuperTitle>

          <Title className="text-white text-4xl lg:text-5xl">
            Chegou a Corpore Pilates
          </Title>

          <p className="text-lg opacity-90">
            O cuidado e a qualidade que você já confia, agora em um estúdio de Pilates
            completo e recém-inaugurado na Torre do Norte Shopping.
          </p>

          <a href={WHATSAPP_LINK} target="_blank">
            <Button  content={'QUERO AGENDAR UMA AULA EXPERIMENTAL'} className="px-8 py-4 text-lg"/>
          </a>
        </div>
      </Section>

      {/* SOBRE */}
      <Section className=''>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 text-center lg:text-left">
          <div>
            <SuperTitle>Uma nova experiência</SuperTitle>
            <Title>O mesmo padrão de qualidade</Title>

            <p className="mb-4">
              Se você já conhece o trabalho sério e dedicado da Corpore Torre, sabe que
              a sua saúde é a nossa prioridade.
            </p>

            <p className="mb-4">
              É com muito orgulho que anunciamos a nossa expansão! A Corpore Pilates
              acaba de ser inaugurada para oferecer mais um serviço essencial para o
              seu bem-estar.
            </p>

            <p>
              Criamos um ambiente moderno, acolhedor e totalmente equipado, mantendo
              a excelência clínica que é nossa marca registrada.
            </p>
          </div>

          <Image
            src={pilatesImg}
            alt="Estúdio Corpore Pilates"
            className="rounded-xl object-fit max-w-[350px] mx-auto lg:mx-0"
          />
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section className="bg-gray-50">
        <div className="py-24 max-w-5xl mx-auto">
          <Title className="text-center mb-12">
            Por que o Pilates na Corpore é para você?
          </Title>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Postura Impecável',
                text: 'Realinha a coluna e combate a má postura causada pelo uso excessivo de celular e trabalho em escritório.'
              },
              {
                title: 'Alívio de Dores Crônicas',
                text: 'Fortalece o core, reduzindo dores nas costas e articulações.'
              },
              {
                title: 'Tonificação Muscular',
                text: 'Ganho de força com definição corporal, sem perder flexibilidade.'
              },
              {
                title: 'Flexibilidade e Mobilidade',
                text: 'Mais liberdade de movimento e leveza no dia a dia.'
              },
              {
                title: 'Controle do Estresse e Ansiedade',
                text: 'Respiração consciente que acalma a mente e conecta corpo e mente.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg mb-2 text-dark-blue-corpore">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section>
        <div className="py-24 text-center max-w-4xl mx-auto">
          <Title>No coração do Cachambi</Title>

          <p className="mb-6">
            Estamos dentro do Norte Shopping, com segurança, estacionamento e todo
            o conforto que você precisa.
          </p>

          <p className="font-semibold mb-8">
            📍 Torre Norte Shopping <br />
            Av. Dom Hélder Câmara, 5200 – Sala 511 <br />
            Cachambi – Rio de Janeiro – RJ
          </p>

          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.%20Dom%20H%C3%A9lder%20C%C3%A2mara,%205200%20-%20Norte%20Shopping&output=embed"
            />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-blue-corpore text-white">
        <div className="py-24 text-center max-w-3xl mx-auto">
          <Title className="text-white mb-4">
            Seu corpo merece esse cuidado
          </Title>

          <p className="mb-8 text-lg">
            A agenda de inauguração já está aberta e os horários são concorridos.
            Garanta o seu espaço na Corpore Pilates.
          </p>

          <a href={WHATSAPP_LINK} target="_blank">
            <Button content='AGENDAR MEU HORÁRIO NO WHATSAPP' className="px-8 py-4 text-lg"/>
          </a>
        </div>
      </Section>

    </main>
    <Section className='bg-dark-blue-corpore w-full'>
      <div className='text-center text-white text-lg py-4 '>
        <span>© Copyright {currentYear} Corporetorre | Todos os direitos reservados.</span>
      </div>
    </Section>  
  </>
  )
}
