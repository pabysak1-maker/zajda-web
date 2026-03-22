import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import References from '@/components/References'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <References />
      <Contact />
      <Footer />
    </div>
  )
}
