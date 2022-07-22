import '../css/nav.css';
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div className="nav">

<div className="w50">
<NavLink activeclassname="activeLink" className="Link" to="/">
              home
</NavLink>

<NavLink activeclassname="activeLink" className="Link" to="/admin">
              admin
</NavLink>

<NavLink activeclassname="activeLink" className="Link" to="/stats">
              stats
</NavLink>
</div>

    </div>
  );
}

export default Nav;
