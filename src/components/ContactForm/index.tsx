'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.EMAILJS_SERVICE_ID!,    // Substitua pelo seu service ID
          process.env.EMAILJS_TEMPLATE_ID!,   // Substitua pelo seu template ID
          form.current,
          process.env.EMAILJS_USER_KEY!        // Substitua pelo seu user ID
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
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 rounded-xl w-full">
      <div>
        <label htmlFor='name' className="block text-gray-700 font-semibold mb-1">Nome</label>
        <input 
          type='text' 
          name='name' 
          id='name' 
          required 
          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor='email' className="block text-gray-700 font-semibold mb-1">E-mail</label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          required 
          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor='phone' className="block text-gray-700 font-semibold mb-1">Telefone</label>
        <input 
          type='tel' 
          name='phone' 
          id='phone' 
          required 
          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor='message' className="block text-gray-700 font-semibold mb-1">Mensagem</label>
        <textarea 
          name='message' 
          id='message' 
          rows={5} 
          required 
          className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button 
        type='submit' 
        className="w-full bg-blue-corpore text-white py-2 rounded-xl font-semibold hover:bg-dark-blue-corpore focus:outline-none focus:ring-2 focus:bg-dark-blue-corpore hover:scale-110 transition"
      >
        Enviar
      </button>
    </form>
  );
};
