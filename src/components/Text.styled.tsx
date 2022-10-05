import styled from 'styled-components';

interface TextProps {
  bold?: boolean;
  color?: string;
  size?: string;
  fontSize?: string;
  underline?: boolean
}

export const TextContainer = styled.p<TextProps>`
  margin: 0;
  font-size: ${props => (props.size ? props.size : '16px')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  white-space: pre-wrap;
  color: ${props => (props.color !== undefined ? props.color : '#333333')};
  font-family: 'Urbanist Regular';
  text-decoration: ${props => (props.underline ? 'underline' : null)};
`;

