import './index.css'
import PropTypes from 'prop-types';
export default function Sidebar({isOpen , setIsopen}){
    return(
        <>
        <div className='whole-page' style={{visibility : isOpen? "visible" : "hidden"}}>
            <aside>
                <div className='close-btn'>
                <button onClick={() =>setIsopen(false)}>
                    <img src="assets/images/icon-menu-close.svg" alt="close" />
                </button>
                </div>
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
            </aside>
        </div>
        </>
    )
}
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsopen: PropTypes.func.isRequired
};