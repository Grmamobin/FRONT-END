import './index.css'
import PropTypes from 'prop-types'; 

export default function Card({h2_Card,h3_Card,p_Card,img_Card}){
    return(
    <>
        <div className='card-info'>
            <img src={`${img_Card}`} alt="imgFooter"/>
            <div className="card-text">
                <h2>{h2_Card}</h2>
                <h3>{h3_Card}</h3>
                <p>{p_Card}</p>
            </div>
        </div>
    </>
    )
}
Card.propTypes = {
    img_Card: PropTypes.string.isRequired,
    h2_Card: PropTypes.string.isRequired,
    h3_Card: PropTypes.string.isRequired,
    p_Card:  PropTypes.string.isRequired,
};
