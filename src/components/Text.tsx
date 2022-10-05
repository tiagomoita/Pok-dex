import { TextContainer } from './Text.styled';

type TextProps = {
  text: string;
  bold?: boolean;
  color?: string;
  size?: string;
  fontSize?: string;
  underline?: boolean
};

export function Text(props: TextProps) {
  const { text, color, bold, size, fontSize, underline } = props;

  return (
    <TextContainer color={color} bold={bold} size={size} fontSize={fontSize} underline={underline}>
      {text}
    </TextContainer>
  );
}
