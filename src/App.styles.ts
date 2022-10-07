import styled from "styled-components";
import UrbanistRegular from './assets/fonts/Urbanist-Regular.ttf'

const styles = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  @font-face {
    font-family: 'Urbanist Regular';
    src: local('Urbanist Regular'), local('Urbanist Regular'), url(${UrbanistRegular}) format('truetype');
  }

  body, p, a {
    font-family: 'Urbanist Regular';
  }

  a {
    font-family: 'Urbanist Regular';
  }
 
`;

export default styles;
