import Styles from './button.styled'
import { Text } from './../components/Text'


interface IProps {
    onClick: Function
    text?: string
    disabled?: boolean
    borderColor?: string
    image?: string
    isClicked?: boolean
    color?: string
    borderDisable?: boolean
    textColor?: string
    textSize?: string
    textBold?: boolean
    margin?: string
    width?: string,
    favourite?: boolean
}

const Button = (props: IProps) => {
    const { onClick, disabled, favourite, text, borderColor, textColor, textSize, textBold, image, isClicked, color, borderDisable, margin, width } = props
        
    return (
        <Styles className="button-wrapper" classDisabled={disabled ? true : false } borderColor={borderColor} isClicked={isClicked} color={color} borderDisable={borderDisable} margin={margin} width={width} favourite={favourite} >
            <button className={"button"} onClick={() => onClick()} disabled={ disabled ? disabled : undefined} >
                {image ? <div className='icon'><img className='image' src={image} alt="icon"/></div> : null}
                {text ? <Text text={text} bold={textBold ? true : false} color={textColor} size={textSize} /> : null}
            </button>
        </Styles>
    )
}

export default Button