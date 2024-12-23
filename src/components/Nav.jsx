import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex justify-center gap-10">
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/products"
            >
                Products
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/services"
            >
                Services
            </NavLink>
            <NavLink
                className={(e) => (e.isActive ? "text-red-600" : "")}
                style={(e) =>
                    e.isActive ? { textDecoration: "underline" } : {}
                }
                to="/about"
            >
                About
            </NavLink>
        </nav>
    );
};

export default Nav;
