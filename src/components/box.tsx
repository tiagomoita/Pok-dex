import Styles from './box.styled'

type BoxProps = {
    children: React.ReactNode,
    boxRadius?: string,
    width?: string,
    heigth?: string,
    padding?: string,
    isDetails?: boolean
}

const Box = (props: BoxProps) => {
    const { children, boxRadius, width, heigth, padding, isDetails } = props;

    return (
        <Styles className="box-wrapper" boxRadius={boxRadius} width={width} heigth={heigth} padding={padding} isDetails={isDetails}>
            {children}
        </Styles>
    )
}

export default Box