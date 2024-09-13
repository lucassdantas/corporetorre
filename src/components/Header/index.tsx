'use client'
import { useState } from 'react';
import image from '@/assets/logo-corpore.png';
import { Button } from '@/components/common/Button';
import { Limiter } from '@/components/Limiter';
import Image from 'next/image';
import Link from 'next/link';
import { SuperHeader } from '@/components/Header/SuperHeader';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importando ícones para o menu
import { MobileMenu } from '@/components/Header/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <SuperHeader />
      <Limiter className="py-2 lg:px-0 px-4">
        <div className="flex flex-col md:flex-row items-center relative">
          
          <div className="flex items-center justify-between md:w-1/3 w-full ">
            <Link href="/">
              <Image
                src={image}
                alt="Logo"
                className="object-contain w-32"
              />
            </Link>
            <button onClick={toggleMenu} className="text-2xl md:hidden">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="hidden w-2/3 md:flex flex-grow items-center md:justify-center justify-end font-bold">
            <ul className="flex gap-4 text-black text-xl">
              <li className="hover:scale-110 transition duration-300">
                <a href="#sobre">Sobre nós</a>
              </li>
              <li className="hover:scale-110 transition duration-300">
                <a href="#servicos">Serviços</a>
              </li>
              <li className="hover:scale-110 transition duration-300">
                <a href="#contato">Fale conosco</a>
              </li>
            </ul>
          </div>

          <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>

          <div className="hidden lg:flex items-center w-full md:w-1/5 justify-center md:justify-end">
            <Button fontSize="sm" />
          </div>
        </div>
      </Limiter>
    </header>
  );
};
