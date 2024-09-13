import { ServiceType } from '@/types/ServiceType';
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard';
import { SuperTitle } from '@/components/SuperTitle';

export const Services = () => {
    const servicesContent:ServiceType[]= [
        {
            media:'RPG',
            name:'RPG',
            description:'A reeducação postural global (RPG) é um dos métodos da fisioterapia que tem como objetivo prevenir e combater alterações da coluna, como escoliose, corcunda e hiperlordose, ajudando a melhorar a postura, por exemplo, sendo também útil para melhorar a respiração, corrigir o posicionamento do joelho, quadril e cabeça.',
        },
        {
            media:'Quiropraxia',
            name:'Quiropraxia',
            description:`A quiropraxia pode ser aplicada de maneira alternativa e complementar na resolução dos seguintes casos:
Dores nos ombros; Dores no pescoço;
Dores de cabeça; Dores nas costas;
Hérnia de disco e dor ciática; Tensão muscular;
Problemas em articulações; Correção de postura;
Lesões ou acidentes variados; Fibromialgia; Dor lombar.`,
        },
        {
            media:'Quiropraxia',
            name:'Fisioterapia',
            description:`A Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. … O objetivo desta área é preservar, manter, desenvolver ou restaurar (reabilitação) a integridade de órgãos, sistemas ou funções.`,
        },
        {
            media:'Quiropraxia',
            name:'Acupuntura',
            description:`Acupuntura ou acupunctura é uma forma de medicina alternativa e um ramo da medicina tradicional chinesa no qual finas agulhas são inseridas no corpo do paciente. A acupuntura utiliza várias técnicas que podem ser usadas para reforçar o sistema imunológico e para o tratamento de problemas e doenças como: Problemas na boca: dor após extração de dente, gengivite ou faringite; Doenças respiratórias: sinusite, rinite, resfriado comum, asma ou bronquite; Lombalgias, Esporão entre outras doenças. `,
        },
        {
            media:'Quiropraxia',
            name:'Avaliação em posturologia',
            description:`A avaliação postural tem como objetivos principais a correção e a prevenção de possíveis alterações posturais. Consiste em analisar, avaliar e determinar atitudes e desvios posturais dos indivíduos. É comum que essas mutações acarretem desconfortos e incapacidades funcionais `,
        },
        {
            media:'Quiropraxia',
            name:'Terapia Manual',
            description:`Terapia manual, abrange o tratamento de saúde de varias doenças etiológicas, com a intervenção física. É um termo genérico utilizado para designar um conjunto de técnicas terapêuticas utilizadas pelo fisioterapeuta para prevenir e tratar as mais variadas disfunções.`,
        },
        {
            media:'Quiropraxia',
            name:'Baropodometria',
            description:`

A baropodometria é uma técnica avançada de avaliação que mede a distribuição de pressão sob os pés durante a postura e o movimento.

Para que serve a Baropodometria?
Avaliar problemas relacionados aos pés:
Como fascite plantar, metatarsalgia e esporão de calcâneo.
Diagnosticar alterações biomecânicas:
Como pronação excessiva, supinação e pé plano.
Auxiliar na prescrição de palmilhas ortopédicas:
Para corrigir alterações biomecânicas e aliviar dores nos pés.
Monitorar a evolução do tratamento:
Para avaliar a eficácia das palmilhas e outras intervenções.
Prevenir lesões:Identificando áreas de alta pressão que podem levar a problemas nos pés.

Benefícios da Baropodometria:

* Diagnóstico preciso de problemas nos pés
* Tratamento personalizado e eficaz
* Prevenção de lesões
* Melhora da postura e do equilíbrio
* Alívio da dor e desconforto nos pés
`,
        },
        {
            media:'Quiropraxia',
            name:'Confecção de palmilhas',
            description:`São palmilhas biomecânicas utilizadas para corrigir a pisada.`,
        },
    ]
    return (
    <Section className='bg-gray-100'>
      <div className="flex w-full justify-center items-center py-12 text-gray-800">
        <div className="flex flex-col py-4 w-full items-center">
          <SuperTitle className='text-dark-blue-corpore'>Nossos serviços</SuperTitle>
          <h2 className='text-4xl font-bold'>Confira nossas especialidades</h2>
          <p className='text-base'>A Corpore possui especialistas em diversas áreas além da Quiropraxia.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-start">
        {servicesContent.map((service:ServiceType, i) => <ServiceCard key={i} media={service.media} name={service.name} description={service.description} className='lg:w-[30%] w-[48%]'/>)}
      </div>
    </Section>
    )
}
