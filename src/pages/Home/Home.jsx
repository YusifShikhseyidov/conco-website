import Footer from '../../components/Footer/Footer'
import CarouselHeader from '../../components/Header/CarouselHeader'
import Sponsors from '../../components/Sponsors/Sponsors'

export default function Home() {
  return (
    <div className='home'>
      <CarouselHeader/>
      <Sponsors/>
      <Footer/>
    </div>
  )
}