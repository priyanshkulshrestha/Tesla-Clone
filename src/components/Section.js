import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = (props) => {
  return <Wrap bgImg = {props.backgroundImg} >
    <Fade bottom>
      <ItemText>
          <h1> {props.title}</h1>
          <p> {props.description} </p>
      </ItemText>
    </Fade>
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {props.leftBtnText}
            </LeftButton>
            { props.rightBtnText && 
                <RightButton>
                    {props.rightBtnText}
                </RightButton>
            }
            
        </ButtonGroup>
    </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
  </Wrap>;
};

export default Section;

// ************* Styling ******************

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => `url("/images/${props.bgImg}")`};
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    max-width: 60vw;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85px;
  text-transformation: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;


const RightButton = styled(LeftButton)`
    background: white;
    color: rgba(23, 26, 32);
    opacity: 0.65;
`;

const DownArrow = styled.img`
    height: 40px;
    ${'' /* margin-top: 20px; */}
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
  
`;