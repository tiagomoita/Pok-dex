import styled from 'styled-components';

const styles = styled.section`
   display: flex;
    flex-direction: column;
    //margin: 50px;
    height: 100%;
    background-color: #2a75bb;
    //border-radius: 20px;
    position: relative;
  
 
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

    .text {
        position: absolute;
        top: 50%;
        left: 50%
    }



`

export default styles;