
import * as S from './styles'

// eslint-disable-next-line react/prop-types
const Button = ({label, onClick}) => {
  return (
    <S.Button onClick={onClick}>{label}</S.Button>
  )
}

export default Button