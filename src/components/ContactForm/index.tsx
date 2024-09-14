'use client';

import React, { useState, useRef } from 'react';
import { InputData } from '@/types/InputDataType';
import { sendEmailjs } from '@/utils/functions/sendEmailjs';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [inputData, setInputData] = useState<InputData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: inputData.name,
      phone: inputData.phone,
      email: inputData.email,
      message: inputData.message,
    };

    if (templateParams) sendEmailjs(templateParams)
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 rounded-xl w-full">
      <div>
        <label htmlFor='name' className="block text-gray-700 font-semibold mb-1">Nome</label>
        <input
          type='text'
          name='name'
          id='name'
          value={inputData.name}
          onChange={handleChange}
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
          value={inputData.email}
          onChange={handleChange}
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
          value={inputData.phone}
          onChange={handleChange}
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
          value={inputData.message}
          onChange={handleChange}
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
