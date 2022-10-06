import styled from 'styled-components';

const styles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #2a75bb;
    position: relative;
  
 
   .card-section {
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: space-between;
        grid-gap: 20px;
        overflow-y: scroll;
        padding: 20px;
    }

    /* Hide scrollbar for chrome */
    .card-section::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .card-section {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%
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