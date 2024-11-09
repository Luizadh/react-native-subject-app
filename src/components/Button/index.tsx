import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  ButtonStyle,
  Title
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string,
  variant?: 'fim' | 'texto'
}

export function Button({ variant = 'texto', title, ...rest }: ButtonProps) {
  return (
    <Container variant={variant}>
      <ButtonStyle variant={variant} {...rest}>
        <Title variant={variant}>{title}</Title>
      </ButtonStyle>
    </Container>
  )
}