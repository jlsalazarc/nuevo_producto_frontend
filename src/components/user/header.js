import { Logo } from './logo';
import { Search } from './search';
import { Navbar } from './navbar';
import './header.css'


export function Header(){
    return (
        <div className="header__container">
            <div className='header__container__group'>
                    <Logo/>
                    <span className={"container__header__nav__btn "}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    <div className={'header__container__group__access '}>
                        <div className="header__container__group__access__search">
                            <Search/>
                        </div>
                        <nav className="header__container__group__access__nav">
                            <Navbar/>
                        </nav>
                    </div>                
            </div>                
        </div>
    );
}              