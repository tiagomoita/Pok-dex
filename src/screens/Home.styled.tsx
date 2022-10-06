import styled from 'styled-components';

const styles = styled.section`
   display: flex;
   align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background-color: #2a75bb;
  
 
   .card-section {
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: space-between;
        grid-gap: 20px;
        overflow-y: scroll;
        padding: 20px;
    }

    .card-section::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .card-section {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media only screen and (max-width: 1560px) {
        .card-section {
            grid-template-columns: auto auto auto;
        }
    }
    
    @media only screen and (max-width: 1230px) {
        .card-section {
            grid-template-columns: auto auto;
        }
    }

    @media only screen and (max-width: 830px) {
        .card-section {
            grid-template-columns: auto;
        }
    }
   

`

export default styles;