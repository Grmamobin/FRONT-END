import './index.css'
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.svg'
import menu from '../../../assets/images/icon-menu.svg'
export default function Header({setIsopen}){
    return (
        <>
        <header className='header-part'>
        <img src={logo} alt='logo'/>
        <nav>
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">New</a>
                </li>
                <li>
                <a href="#">Popular</a>
                </li>
                <li>
                <a href="#">Trending</a>
                </li>
                <li>
                <a href="#">Categories</a>
                </li>
            </ul>
        </nav>
        <button onClick={() =>setIsopen(true)}>
            <img src={menu} alt="open" />
        </button>
        </header>
        </>
    )
}
Header.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsopen: PropTypes.func.isRequired
};