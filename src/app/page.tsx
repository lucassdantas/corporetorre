import { About } from '@/components/Sections/About'
import { Banner } from '@/components/Sections/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Promotion } from '@/components/Sections/Promotion'
import { SubBanner } from '@/components/Sections/SubBanner'
import { Services } from '@/components/Sections/Services'

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
    </main>
    <Footer/>
  </>
  );
}
