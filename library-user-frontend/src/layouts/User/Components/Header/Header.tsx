import { LogoAndSearchProfile } from './components/LogoAndSearchProfile/LogoAndSearchProfile';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';

export const Header = () => {
    return (
        <>
            {/*************************************
                  Header Start
          **************************************/}
            <header id="tg-header" className="tg-header tg-haslayout">
                <Navbar />
                <LogoAndSearchProfile />
                <Menu />
            </header>
            {/*************************************
                  Header End
          **************************************/}
        </>
    );
};
