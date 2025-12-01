import { ServiceType } from "@/types/ServiceType";
import rpgImg from '@/assets/servicesMedia/rpg.jpg'
import chiropraticImg from '@/assets/servicesMedia/quiropraxia-profissional-em-paciente.jpg'
import phisiotherapyImg from '@/assets/servicesMedia/fisioterapia.jpg'
import acupunctureImg from '@/assets/servicesMedia/acupuntura.jpg'
import posturologyAvaliationImg from '@/assets/servicesMedia/avaliacao-postural.jpg'
import manualTherapy from '@/assets/servicesMedia/fisioterapia-manual.jpg'
import insolesImg from '@/assets/servicesMedia/confeccao-de-palmilhas.jpg'
import pilatesImg from '@/assets/servicesMedia/pilates-corpore.jpg'

const baropodometryVideoUrl:string = '/videos/Baropodometria.mp4'
const phisiotherapyVideoUrl:string = '/videos/procedimento-fisioterapeutico-corporetorre.mp4'
const chiropraticVideoUrl:string = '/videos/servico-quiropraxia-corporetorre.mp4'
export const servicesContent:ServiceType[]= [
  {
      media:pilatesImg,
      name:'Pilates',
      description:'EM BREVE',
  },
  {
      media:rpgImg,
      name:'RPG',
      description:'A reeducação postural global (RPG) é um dos métodos da fisioterapia que tem como objetivo prevenir e combater alterações da coluna, como escoliose, corcunda e hiperlordose, ajudando a melhorar a postura, por exemplo, sendo também útil para melhorar a respiração, corrigir o posicionamento do joelho, quadril e cabeça.',
  },
  {
      mediaUrl:chiropraticVideoUrl,
      mediaIsVideo:true,
      name:'Quiropraxia',
      description:`A quiropraxia pode ser aplicada de maneira alternativa e complementar na resolução dos seguintes casos:
Dores nos ombros; Dores no pescoço;
Dores de cabeça; Dores nas costas;
Hérnia de disco e dor ciática; Tensão muscular;
Problemas em articulações; Correção de postura;
Lesões ou acidentes variados; Fibromialgia; Dor lombar.`,
  },
  {
      mediaUrl:phisiotherapyVideoUrl,
      mediaIsVideo:true,
      name:'Fisioterapia',
      description:`A Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. … O objetivo desta área é preservar, manter, desenvolver ou restaurar (reabilitação) a integridade de órgãos, sistemas ou funções.`,
  },
  {
      media:acupunctureImg,
      name:'Acupuntura',
      description:`Acupuntura ou acupunctura é uma forma de medicina alternativa e um ramo da medicina tradicional chinesa no qual finas agulhas são inseridas no corpo do paciente. A acupuntura utiliza várias técnicas que podem ser usadas para reforçar o sistema imunológico e para o tratamento de problemas e doenças como: Problemas na boca: dor após extração de dente, gengivite ou faringite; Doenças respiratórias: sinusite, rinite, resfriado comum, asma ou bronquite; Lombalgias, Esporão entre outras doenças. `,
  },
  {
      media:posturologyAvaliationImg,
      name:'Avaliação em posturologia',
      description:`A avaliação postural tem como objetivos principais a correção e a prevenção de possíveis alterações posturais. Consiste em analisar, avaliar e determinar atitudes e desvios posturais dos indivíduos. É comum que essas mutações acarretem desconfortos e incapacidades funcionais `,
  },
  {
      media:manualTherapy,
      name:'Terapia Manual',
      description:`Terapia manual, abrange o tratamento de saúde de varias doenças etiológicas, com a intervenção física. É um termo genérico utilizado para designar um conjunto de técnicas terapêuticas utilizadas pelo fisioterapeuta para prevenir e tratar as mais variadas disfunções.`,
  },
  {
      mediaUrl:baropodometryVideoUrl,
      mediaIsVideo:true,
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
      media:insolesImg,
      name:'Confecção de palmilhas',
      description:`
        São palmilhas biomecânicas utilizadas para corrigir a pisada.
        A confecção das palmilhas posturais oferecem diversos benefícios, especialmente para pessoas que buscam melhorar a postura, aliviar dores e prevenir problemas ortopédicos. Entre os principais benefícios estão:
<br/>
<ul>
  <li>
    <strong>Correção Postural</strong>
    <ul>
      <li>Ajustam o posicionamento dos pés, que influencia diretamente a postura do corpo.</li>
    </ul>
  </li>
  <li>
    <strong>Alívio de Dores</strong>
    <ul>
      <li>Reduzem dores nas costas, quadris, joelhos e tornozelos causadas por desalinhamentos posturais.</li>
    </ul>
  </li>
  <li>
    <strong>Prevenção de Lesões</strong>
    <ul>
      <li>Diminuem o risco de lesões musculares e articulares, equilibrando a distribuição do peso corporal.</li>
    </ul>
  </li>
  <li>
    <strong>Melhora da Estabilidade e Equilíbrio</strong>
    <ul>
      <li>Promovem uma base mais firme para a movimentação, o que melhora o equilíbrio e a estabilidade.</li>
    </ul>
  </li>
  <li>
    <strong>Ajuste Personalizado</strong>
    <ul>
      <li>São confeccionadas de forma personalizada para atender às necessidades específicas de cada pessoa.</li>
    </ul>
  </li>
  <li>
    <strong>Redução de Fadiga Muscular</strong>
    <ul>
      <li>Melhoram a eficiência do caminhar e da postura, diminuindo o esforço muscular.</li>
    </ul>
  </li>
  <li>
    <strong>Auxílio em Tratamentos Ortopédicos</strong>
    <ul>
      <li>Complementam tratamentos de problemas como fascite plantar, esporão do calcâneo e pés planos.</li>
    </ul>
  </li>
  <li>
    <strong>Melhora no Desempenho Esportivo</strong>
    <ul>
      <li>Para atletas, corrigem padrões de movimento, aumentando a eficiência e diminuindo o risco de lesões.</li>
    </ul>
  </li>
</ul>

Você está considerando adquirir ou indicar palmilhas posturais?
        `,
  },
]