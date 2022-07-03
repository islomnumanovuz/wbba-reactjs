import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 1440px;
  padding: 0 120px;
  margin: 0 auto;
`;
export const Logo = styled.image`
  width: 34px;
  height: 34px;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-top: 25px;
  padding-bottom: 18px;
`;
export const NavBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--greenColor);
  cursor: pointer;
  span {
    display: inline-block;
    margin-left: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 19px;
    cursor: pointer;
  }
`;
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    list-style: none;
    padding: 0;
  }
  .basketWrapper {
    margin-left: 30px;
    position: relative;
    .basketWrapper__count {
      position: absolute;
      right: 0;
      top: 0;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12px;
      height: 12px;
      line-height: 12px;
      border: 2px solid #fff;
      border-radius: 50%;
      background-color: var(--greenColor);
      color: #fff;
      font-size: 10px;
    }
  }
`;
export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: ${({ active }) => (active ? "#46a358" : "#3d3d3d")};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--greenColor);
  border: none;
  border-radius: 6px;
  padding: 8px 17px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-left: 30px;
  span {
    display: inline-block;
    margin-left: 5px;
  }
  cursor: pointer;
`;
