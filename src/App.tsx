import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocalBusinessSchema } from './components/LocalBusinessSchema'
import { Services } from './components/Services'
import { VisitUs } from './components/VisitUs'

function App() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <VisitUs />
      </main>
      <Footer />
    </>
  )
}

export default App
