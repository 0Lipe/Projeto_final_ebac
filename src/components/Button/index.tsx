import * as S from './styles'

export type Props = {
  to?: string
  children: string
  onClick?: () => void
}

const Button = ({ to, children }: Props) => {
  return (
    <S.ButtonLink type="link" to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
