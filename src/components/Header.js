import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
// import MenuIcon from '@mui/icons-material/Menu';


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars);


  return <Container>
      <a href="/">
        <img src="/Tesla-clone/images/logo.svg" alt="logo" />
      </a>
      <Menu>
          {cars && cars.map((car, index)=>(
            <a key={index} href="#">{car}</a>
          ))}
      </Menu>
      <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <CustomMenu onClick={ () => setBurgerStatus(true) }>Menu</CustomMenu>
      </RightMenu>

      <BurgerNavMenu show={burgerStatus}>
        <WrapClose>
        <CustomClose className="fas fa-times" onClick={ () => setBurgerStatus(false) }/>
        </WrapClose>
        
        {cars && cars.map((car, index)=>(
            <p key={index}><a href="#">{car}</a></p>
          ))}
        <p><a href="#">Existing Inventory</a></p>
        <p><a href="#">Used Inventory</a></p>
        <p><a href="#">Trade-In</a></p>
        <p><a href="#">Test Drive</a></p>
        <p><a href="#">Cybertruck</a></p>
        <p><a href="#">Roadster</a></p>
        <p><a href="#">Semi</a></p>
        <p><a href="#">Charging</a></p>
        <p><a href="#">Powerwall</a></p>
        <p><a href="#">Commercial Energy</a></p>
        <p><a href="#">Utilities</a></p>
        <p><a href="#">Find Us</a></p>
        <p><a href="#">Support</a></p>
        <p><a href="#">Investor Relations</a></p>
      </BurgerNavMenu>
  </Container>;
}

export default Header;


// **************Styling***************

const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100vw;
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
`;

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 500;
    text-transformation: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display:none;
  }
`;

const RightMenu = styled.div`
    display: flex;
    align-items:center;


    a{
    font-weight: 500;
    text-transformation: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled.div`
    cursor: pointer;
    font-weight: 500;
    text-transformation: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
`;

const BurgerNavMenu = styled.div`
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    z-index: 10;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; 
    transition: transform 0.2s ease-in-ease-out;
    p{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 5px 15px;
        margin: 8px;
    }

    p:hover{
      background:  rgb(202, 200, 200);
      border-radius: 15px;
    }
`;

const CustomClose = styled.div` 
    cursor: pointer;
`;

const WrapClose = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: flex-end;
  
`;
