import '../css/nav.css';
import { Routes, NavLink, Route, Router } from "react-router-dom";
import Nav from './Nav';
import Home from '../pages/home/Home';
import Admin from '../pages/admin/Admin';
import Stats from '../pages/stats/Stats';

function NavRouts() {
  return (
    <div className="">

    
<Nav />
<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>
<Route path="/admin" element={<Admin/>} exact/>
<Route path="/stats" element={<Stats/>} exact/>


{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}
</Routes>
    </div>
  );
}

export default NavRouts;
