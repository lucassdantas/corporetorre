import './App.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Promotion } from './components/Promotion'
import { SubBanner } from './components/SubBanner'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <SubBanner/>
        <Promotion/>
        <About/>
      </main>
    </>
  )
}

export default App
