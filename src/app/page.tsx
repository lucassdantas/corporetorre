import { About } from '@/components/Sections/About'
import { Banner } from '@/components/Sections/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Promotion } from '@/components/Sections/Promotion'
import { SubBanner } from '@/components/Sections/SubBanner'
import { Services } from '@/components/Sections/Services'
import { Infos } from '@/components/Sections/Infos'
import { Testimonials } from '@/components/Sections/Testimonials'
import { Contact } from '@/components/Sections/Contact'

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <SubBanner/>
      <Promotion/>
      <About/>
      <Services/>
      <Infos/>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
  </>
  );
}
