import { Sbackground, Scontainer } from './styles'

export default function Modal({
  children,
  isOpen = true,
}: {
  children: React.ReactNode
  isOpen?: boolean
}) {
  return (
    <Sbackground data-isopen={isOpen}>
      <Scontainer>{children}</Scontainer>
    </Sbackground>
  )
}
