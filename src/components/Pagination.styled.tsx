import styled from 'styled-components';

const styles = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(17, 13, 26, 0.17);
    padding: 20px;
    text-align: center;
    background-color: #ffcb05;
    

    .pagination {
        margin: 0;
    }

   

    @media only screen and (max-width: 620px) {
        .page-item {
        --bs-pagination-padding-x: 0.5rem;
        --bs-pagination-padding-y: 0.25rem;
    }

    @media only screen and (max-width: 500px) {
        .page-item {
            --bs-pagination-padding-x: 0.25rem;
            --bs-pagination-padding-y: 0rem;
        }


    }


`

export default styles;