import { FloatButton } from '@/components/FloatButton';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';
import React from 'react';

export default function Page() {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Corpore</title>
        <meta name="description" content="Leia a política de privacidade do Corpore e saiba como tratamos suas informações pessoais." />
      </Head>
      <GoogleTagManager gtmId="GTM-NMMR2W6T" />

      <Header />
      <main>
        <div className='bg-dark-blue-corpore text-white h-[200px] flex flex-col justify-center items-center px-4'>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-lg text-center max-w-2xl">
            Entenda como a Corpore coleta, usa e protege suas informações pessoais.
          </p>
        </div>
        <Section className=" py-8  mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Compromisso com a Privacidade</h2>
            <p>
              Sua privacidade é importante para nós. É política do Corpore respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://corpore.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Corpore</a> e outros sites que possuímos e operamos.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais somente quando realmente precisamos delas para fornecer um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será utilizado.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Armazenamento e Proteção</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Compartilhamento de Informações</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Links para Sites Externos</h2>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Recusa de Solicitações</h2>
            <p>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Uso do Google Tag Manager</h2>
            <p>
              Utilizamos o Google Tag Manager para gerenciar e implantar tags no nosso site de forma mais eficiente. O Google Tag Manager não coleta diretamente informações pessoais, mas permite o disparo de outras tags que podem coletar informações. 
              <br />
              Essas outras tags podem coletar dados como seu comportamento de navegação, endereço de IP, localização, e outras informações que podem ser usadas para análises e para melhorar sua experiência no site. Ao navegar no nosso site, você consente com o uso dessas tecnologias.
              <br />
              Para mais detalhes sobre como o Google lida com seus dados, você pode acessar a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Política de Privacidade do Google</a>.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Aceitação das Práticas</h2>
            <p>
              O uso contínuo de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>
          </div>
        </Section>
      <FloatButton/>
      </main>

      <Footer />
    </>
  );
}
