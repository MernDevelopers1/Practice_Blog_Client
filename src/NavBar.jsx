import { NavLink, useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Articles">Articles</NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-right">
        {user ? (
          <button onClick={() => signOut(getAuth())}>Log out</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </>
  );
};

export default NavBar;
