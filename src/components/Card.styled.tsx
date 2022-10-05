import styled from 'styled-components';

interface cardProps {
    favourite?: boolean
}

const styles = styled.section<cardProps>`
    

    .image-container {
        width: 375.7px;
        height: 250px;
        border-radius: 16px;
        position: relative;
    }

    .clickable-zone {
        //width: 300px;
        //position: absolute;
    }

    .card-information-title {
        position: absolute;
        left: 25px;
        bottom: 20px;
    }

    .card-information-location {
        position: absolute;
        left: 25px;
        bottom: 15px;
    }

`

export default styles;