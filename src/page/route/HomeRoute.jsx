import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

const HomeRoute = () => {
    const [toggle, setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <Nav />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default HomeRoute;