import "./Cardskill.css"

function Cardskill(props){
    return(
        <div className="cardskill-container">
            <div className="cardskill-logo">{props.logo}</div>
            <div className="cardskill-text">
                <h3 className="cardskill-title">{props.title}</h3>
                <p className="cardskill-paragraph">{props.description}</p>
            </div>
        </div>
    )
}

export default Cardskill;