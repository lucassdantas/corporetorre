import { InputData } from '@/types/InputDataType';
import emailjs from '@emailjs/browser';

export const sendEmailjs = ({name, phone, email, message}:InputData) => {
  emailjs
  .send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,   
    {name, phone, email, message},
    process.env.NEXT_PUBLIC_EMAILJS_USER_KEY!  
  )
  .then(
    (result) => {
      console.log('Success:', result.text);
      alert('Mensagem enviada com sucesso!');
    },
    (error) => {
      console.error('Error:', error.text);
      alert('Ocorreu um erro. Tente novamente.');
    }
  );
}
