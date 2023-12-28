'use client'

import { Sheader } from './styles'

export default function Header({
  pathName = '',
  children,
}: {
  pathName: string
  children: React.ReactNode
}) {
  return (
    <Sheader>
      {children}
      <p>{pathName}</p>
    </Sheader>
  )
}
