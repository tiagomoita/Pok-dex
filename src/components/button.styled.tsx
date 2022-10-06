import styled from "styled-components";

interface ButtonProps {
  classDisabled?: boolean,
  borderDisable?: boolean
  borderColor?: string,
  color?: string,
  textColor?: string
  isClicked?: boolean
  margin?: string
  width?: string
  favourite?: boolean
}

const styles = styled.article<ButtonProps>`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ? props.width : null};

  .button {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    background-color: ${(props) => props.color ? props.color : 'white'};
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    border-radius: 91px;
    box-sizing: border-box;
    height: 56px;
    border: ${(props) => props.borderDisable ? 'none' : `1px solid black`};
    border-color: ${(props) => props.borderColor ? props.borderColor : 'black'};
    cursor: ${(props) => props.classDisabled ? null : "pointer"};
    margin: ${(props) => props.margin ? props.margin : '10px'};
    width: ${(props) => props.width ? props.width : 'max-content'};


  }

  .button:hover {
    background-color: ${(props) => props.classDisabled ? null : '#F6BE00' };
    color: ${(props) => props.textColor ? 'black' : props.textColor};
  }

  .image {
        width: 30px;
        height: 30px;
        filter: ${(props) => props.favourite ? 'invert(55%) sepia(88%) saturate(423%) hue-rotate(9deg) brightness(102%) contrast(92%)' : 'none' };
       
    }


`;

export default styles;
