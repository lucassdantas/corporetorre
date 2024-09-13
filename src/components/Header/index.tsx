import { maxWidth } from '@/utils/max-width';
import image from '@/assets/logo-corpore.png';
import { Button } from '@/components/common/Button';
import { Limiter } from '@/components/Limiter';
import Image from 'next/image';
import Link from 'next/link';
import { SuperHeader } from '@/components/Header/SuperHeader';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <SuperHeader />
      <Limiter className="py-2">
        <div className="flex items-center ">
          <div className="flex items-center w-1/5">
            <Link href="/">
              <Image
                src={image}
                alt="Logo"
                className="object-contain w-32 " 
              />
            </Link>
          </div>

          <div className="flex-grow flex items-center justify-center font-bold">
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

          <div className="flex items-center w-1/5 justify-end">
            <Button fontSize="sm" />
          </div>
        </div>
      </Limiter>
    </header>
  );
};
