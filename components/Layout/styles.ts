import Link from 'next/link'
import tw from 'tailwind-styled-components'

export const Swrap = tw.div`
w-11/12
mx-auto
`

export const Smain = tw.main`
flex
flex-1
`

export const Saside = tw.aside`
flex
flex-col
w-80
border-r
pr-5
absolute
bg-white
h-screen
gap-5
data-[isOpen=false]:hidden
`

export const SlinkAside = tw(Link)`
self-stretch
border
rounded
p-5
data-[pathName=true]:bg-black
data-[pathName=true]:text-white
`
