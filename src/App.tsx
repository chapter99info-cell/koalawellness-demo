import { About } from './components/About'
import { ExpressServices } from './components/ExpressServices'
import { FaqSchema } from './components/FaqSchema'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocalBusinessSchema } from './components/LocalBusinessSchema'
import { MoreServices } from './components/MoreServices'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { VisitUs } from './components/VisitUs'

function App() {
  return (
    <>
      <LocalBusinessSchema />
      <FaqSchema />
      <Header />
      <main>
        <Hero />
        <Services />
        <ExpressServices />
        <MoreServices />
        <Reviews />
        <About />
        <VisitUs />
      </main>
      <Footer />
    </>
  )
}

export default App
