import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Pokemon_logo from '../../assets/images/Pokemon_logo.png';

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background-color: #ef5350;
`

const CenterNav = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 100px;
`

const SearchContainer = styled.div`
  flex-grow: 3;
  height: 100%;
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Item = styled(NavLink)`
 height: 100%;
 color: white;
 text-decoration: none;
 display: flex;
 align-items: center;
 transition: 0.5s;
 padding: 0 10px;
 ${(props) => !props.withOutHover  && `
   &:hover{
     background-color: white;
     color:#ef5350;
  }`
};
`;

const Navbar = () => {
 return(
   <NavbarContainer>
     <CenterNav>
       <Item withOutHover to="/"><Logo src={Pokemon_logo} /></Item>
       <SearchContainer>
         <Item to='/pokedex' activeClassName="activeItem">Pokedex</Item>
         <Item to='/games' activeClassName="activeItem">Games</Item>
       </SearchContainer>
     </CenterNav>
   </NavbarContainer>
 )
}

export default Navbar;
