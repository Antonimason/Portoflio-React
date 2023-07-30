import './Carrousel.css'

function Carrousel(props) {

    return (
        <>
        <div className='carrousel-container'>
            <div className="carrousel">
                <div className="image">{props.image1}</div>
                <div className="image">{props.image2}</div>
                <div className="image">{props.image3}</div>
                <div className="image">{props.image4}</div>
                <div className="image">{props.image5}</div>
                <div className="image">{props.image6}</div>
                <div className="image">{props.image7}</div>
                <div className="image">{props.image8}</div>
                <div className="image">{props.image9}</div>
            </div>
        </div>
        </>
    )
}

export default Carrousel