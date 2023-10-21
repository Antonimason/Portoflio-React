import "./Badge.css";

function Badge(props) {
  return (
    <div className="badge-container">
      <div className="badge-img-container"><img className="badge-img" src={props.img} alt={props.name} loading="lazy"/></div>
    </div>
  );
}

export default Badge;
