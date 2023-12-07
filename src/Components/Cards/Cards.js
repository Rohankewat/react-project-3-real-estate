import "./Cards.css";
import { Link } from "react-router-dom";


function Cards(props) {
    return (
        <div className="cards_main">
            <Link to={`detail/${props.obj3.id}`} style={{ textDecoration: "none" }}>
                <img src={props.obj3.src} />
                <hr></hr>
                <h2>{props.obj3.title}</h2>
                <p className="loc_p1">{props.obj3.location}</p>
                <p className="dis_p1">{props.obj3.dis}</p>
                <button>View details</button>
            </Link>
        </div>
    )
}

export default Cards;