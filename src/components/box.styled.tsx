import styled from 'styled-components'

interface BoxProps {
    boxRadius?: string,
    width?: string,
    heigth?: string,
    padding?: string,
    isDetails?: boolean
}

const styles = styled.section<BoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgba(17, 13, 26, 0.17);
    box-shadow: 0px 4px 18px 4px rgba(0, 0, 0, 0.07);
    border-radius: ${(props) => props.boxRadius ? props.boxRadius : "108px"};
    padding: ${(props) => props.padding ? props.padding : "30px"};
    width: ${(props) => props.width ? props.width : 'none'};
    height: ${(props) => props.heigth ? props.heigth : 'none'};
    min-width: 400px;

    @media only screen and (max-width: 568px) {  
        padding: ${(props) => props.isDetails ? '10px' : null};
        background-color: ${(props) => props.isDetails ? '#ffcb05' : null};
        box-shadow: ${(props) => props.isDetails ? 'none' : null};
        border: ${(props) => props.isDetails ? 'none' : null};
    }
    

    

    
    
`

export default styles;