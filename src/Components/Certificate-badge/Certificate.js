import './Certificate.css';

function Certificate(props){
    return(<>
            <a className='certificate-container' target="_blank" title="certificate" rel="noreferrer" href={props.link}>
                <div className='certificate-box'>
                    <p className='certificate-title title'>{props.title}</p>
                    <p className='certificate-description text'>{props.description}</p>
                    <p className='certificate-finished text'>{props.finished}</p>
                </div>
            </a>
    </>)
};

export default Certificate;