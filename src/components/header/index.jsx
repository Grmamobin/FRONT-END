import './index.css'
import PropTypes from 'prop-types';
export default function Header({setIsopen}){
    return (
        <>
        <header className='header-part'>
        <img src='assets/images/logo.svg' alt='logo'/>
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
            <img src="assets/images/icon-menu.svg" alt="open" />
        </button>
        </header>
        </>
    )
}
Header.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsopen: PropTypes.func.isRequired
};