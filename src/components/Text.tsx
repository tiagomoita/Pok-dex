import { TextContainer } from './Text.styled';

type TextProps = {
  text: string;
  bold?: boolean;
  color?: string;
  size?: string;
  underline?: boolean
};

export function Text(props: TextProps) {
  const { text, color, bold, size, underline } = props;

  return (
    <TextContainer color={color} bold={bold} size={size} underline={underline}>
      {text}
    </TextContainer>
  );
}
