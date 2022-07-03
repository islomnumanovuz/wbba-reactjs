import React, { useState } from "react";
import { Container, NavBrand, Nav, NavItems, Link, Button } from "./styled";
import { navbar } from "../../util/index";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as LogIn } from "../../assets/icons/logout.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as BascetIcon } from "../../assets/icons/basket.svg";
import { Outlet } from "react-router-dom";
export const Navbar = () => {
  const [active, setActive] = useState("/home");
  return (
    <Container>
      <Nav>
        <NavBrand>
          <Logo src={Logo} alt="logo" />
          <span>Greenshop</span>
        </NavBrand>
        <NavItems>
          {navbar.map((value) => {
            return (
              <li>
                <Link
                  onClick={() => setActive(value.path)}
                  active={active === value.path}
                  key={value.id}
                  to={value.path}
                >
                  {value.title}
                </Link>
              </li>
            );
          })}
        </NavItems>
        <NavItems>
          <SearchIcon />
          <div className="basketWrapper">
            <BascetIcon />
            <span className="basketWrapper__count">6</span>
          </div>
          <Button className="btn nav-btn">
            <LogIn />
            <span>Login</span>
          </Button>
        </NavItems>
      </Nav>
      <Outlet />
    </Container>
  );
};
export default Navbar;
