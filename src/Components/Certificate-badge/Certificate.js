import './Certificate.css';

function Certificate(props){
    return(<>
            <a className='certificate-container' target="_blank" title="certificate" rel="noreferrer" href={props.link}>
                <div className='certificate-box'>
                    <p className='certificate-title'>{props.title}</p>
                    <p className='certificate-description'>{props.description}</p>
                    <p className='certificate-finished'>{props.finished}</p>
                </div>
            </a>
    </>)
};

export default Certificate;