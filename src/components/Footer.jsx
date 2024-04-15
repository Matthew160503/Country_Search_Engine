import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
                <div className='footer__title'>Developed by <Link className='footer__link' to={"https://www.instagram.com/m.kurilovichhh/?next=%2F"}>Matthew Kurylovich</Link></div>
        </footer>
    );
}

export default Footer;