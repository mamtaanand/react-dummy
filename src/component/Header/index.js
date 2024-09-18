import { Link } from "react-router-dom";
import Logo from '../../assets/imgs/logo.svg';

const Header = (props) => {
    return (
        <>
            <nav className="navbar custom-navbar navbar-expand-md navbar-light sticky-top" style={{ backgroundColor: "skyblue" }}>
                <div className="container d-flex align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
                    </Link>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/users" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Category</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/single" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Single</Link>
                            </li>  
                            <li className="nav-item">
                                <Link to="/limit" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Limit</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sort" className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Sort</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to='/admin/product' className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}>Admin</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to='/practice' className="nav-link" style={{ color: "black", fontSize: "15px", fontFamily: "Arial"}}>Practice</Link>
                            </li>  
                                                                               
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
