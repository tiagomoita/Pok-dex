import styled from 'styled-components'

interface BoxProps {
    boxRadius?: string,
    width?: string,
    heigth?: string,
    padding?: string
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
    min-width: fit-content;

    
    
`

export default styles;