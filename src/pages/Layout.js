import { Outlet, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Layout = () => {
  let activeStyle = {
    color: "red",
  };
  let activeClassName = { color: "red" };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <HomeIcon color="primary" />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/"
                  style={({ isActive }) =>
                    isActive ? { activeStyle } : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/adduser"
                  style={({ isActive }) =>
                    isActive ? { activeStyle } : undefined
                  }
                >
                  Add User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  Style={({ isActive }) =>
                    isActive ? { activeClassName } : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
