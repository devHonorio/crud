import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import tw from 'tailwind-styled-components'

export const Sheader = tw.header`
flex
justify-between
items-center
py-5
`

export const StogleMenu = tw.button`
p-4
border
rounded
`

export const SiconTogleMenu = tw(Bars3BottomLeftIcon)`
text-black
h-6
w-6
`
