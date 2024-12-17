import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Problems from '@/components/Problem'
import ProductIntroduction from '@/components/ProductIntroduction'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problems />
      <ProductIntroduction />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
