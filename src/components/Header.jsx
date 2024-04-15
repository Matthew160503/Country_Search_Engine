import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function Header() {
    const [theme, setTheme] = useState('light');

    const handleChangeTheme = () => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light')
    }

    useEffect(()=>{
        if (theme === 'dark'){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },[theme]);

    return (
        <header className="header">
           <div className="header__container">
                <h1 className="header__title">Country searcher</h1>
                <div className="header__theme">
                    <button onClick={() => handleChangeTheme()} className="header__button"><BsFillMoonStarsFill /></button>
                    <div className="header__title box">{theme === 'light' ? 'Dark mode' : 'Light mode'}</div>
                </div>
           </div>
        </header>
    );
}

export default Header;