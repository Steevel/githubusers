import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
    const context = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white text-decoration-none">
                    Github Users
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="">
                <Nav className="ms-auto" navbar>
                    {context.user ? (
                        <NavItem>
                            <NavLink tag={Link} to="/" className="text-white">
                                Logout
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-white">
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/" className="text-white">
                                    Signin
                                </NavLink>
                            </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
