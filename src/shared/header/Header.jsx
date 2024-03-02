import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to='/'><img src="./img/logo/lg-app.png" alt="" /></Link>
    </header>
  );
};

export default Header;
