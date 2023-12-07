import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header_main">
            <div className="header">
                <Link to="/" className="link1">HOME</Link>
                <Link to="Company/Company" className="link2">COMPANY</Link>
                <Link to="Services/Services" className="link3">SERVICES</Link>
                <Link to="Properites/Properties" className="link5">PROPERTIES</Link>
                <Link to="Contacts/Contacts" className="link6">CONTACTS</Link>
            </div>
        </div>
    )
}

export default Header;