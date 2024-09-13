import { Button } from '@/components/common/Button';
import { Section } from '@/components/Section';
import { SuperTitle } from '@/components/SuperTitle';

export const MainBanner = () => {
  return (
    <Section className="flex flex-col items-center w-full bg-blue-corpore bg-[url('/images/quiropraxia-corporetorre.jpg')] bg-no-repeat bg-cover bg-blend-darken">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full text-sm text-white h-[90vh] max-h-[670px] py-4 px-6">
        <div className="flex flex-col items-center lg:items-start lg:w-5/6 w-full text-center lg:text-left">
          <SuperTitle className="mb-4">Bem-vindo à Corpore</SuperTitle>
          <h2 className="text-3xl lg:text-6xl font-bold mb-4">
            Excelência em atendimento com diversas especialidades.
          </h2>
          <p className="text-base lg:text-lg mb-4">
            Agende sua Quiropraxia e melhore sua dor nas costas.
          </p>
          <p className="text-base lg:text-lg mb-4">
            Volte a ter seu conforto agendando sua Quiropraxia.
          </p>
          <Button />
        </div>
        <div className="hidden lg:flex flex-col items-center lg:w-1/6"></div>
      </div>
    </Section>
  );
};
