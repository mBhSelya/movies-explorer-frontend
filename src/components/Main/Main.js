import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Main() {
    
    return(
        <main className='main'>
            <Header 
                dark={true}
                isLoggenIn={false}
            />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
}