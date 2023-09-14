import "./Badge.css";

function Badge(props) {
  return (
    <div className="badge-container">
      <div className="badge-img-container"><img className="badge-img" src={props.img} alt={props.name} loading="lazy"/></div>
      <div className="text-box">
        <div className="text-content">
          <p className="text-box-name title">{props.name}</p>
        </div>
        <p className="text-box-description text">Started: {props.date}</p>
        <div></div>
      </div>
    </div>
  );
}

export default Badge;
