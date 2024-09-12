import { Header } from '@/components/Header'
import { MainBanner } from '@/components/Sections/MainBanner'
import { Promotion } from '@/components/Sections/Promotion'
import { About } from '@/components/Sections/About'
import { SubBanner } from '@/components/Sections/SubBanner'
import { Services } from '@/components/Sections/Services'
import { Infos } from '@/components/Sections/Infos'
import { Testimonials } from '@/components/Sections/Testimonials'
import { Contact } from '@/components/Sections/Contact'
import { FloatButton } from '@/components/FloatButton'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <MainBanner/>
      <SubBanner/>
      <Promotion/>
      <About/>
      <Services/>
      <Infos/>
      <Testimonials/>
      <Contact/>
      <FloatButton/>
    </main>
    <Footer/>
  </>
  );
}
