import styled from 'styled-components';

const styles = styled.section`
  display: flex;
  align-items: center;  
  flex-direction: row;
  background-color: #ffcb05;
  width: 100%;
  height: 100.5px;
  left: 0px;
  right: 0px;
  top: 0px;
  border-bottom: 1px solid rgba(17, 13, 26, 0.17);
 
  
 .button-wrapper {
    margin-left: auto;
 }

 .title {
   margin-left: 80px;
 }

 @media only screen and (max-width: 550px) {
    .title {
      margin-left: 40px;
    }
  }

  @media only screen and (max-width: 400px) {
    .title {
      margin-left: 5px;
    }
  }

`

export default styles;