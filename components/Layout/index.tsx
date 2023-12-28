'use client'

import { usePathname } from 'next/navigation'
import Header from '../Header'
import { Saside, SlinkAside, Smain, Swrap } from './styles'
import { useState } from 'react'
import { SiconTogleMenu, StogleMenu } from '../Header/styles'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  const [isOpenToggleMenu, setIsOpenToggleMenu] = useState(false)
  return (
    <Swrap>
      <Header pathName={pathName}>
        <StogleMenu onClick={() => setIsOpenToggleMenu(!isOpenToggleMenu)}>
          <SiconTogleMenu />
        </StogleMenu>
      </Header>

      <Smain>
        <Saside data-isOpen={isOpenToggleMenu}>
          <SlinkAside href="/" data-pathName={pathName === '/'}>
            Home
          </SlinkAside>
          <SlinkAside href="products" data-pathName={pathName === '/products'}>
            Produtos
          </SlinkAside>
        </Saside>

        {children}
      </Smain>
    </Swrap>
  )
}
