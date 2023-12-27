import tw from 'tailwind-styled-components'

export const Sbackground = tw.div`
fixed
top-0
bottom-0
left-0
right-0
data-[isopen=true]:flex
hidden
justify-center
items-center
backdrop-blur-sm
`

export const Scontainer = tw.div`
h-5/6
w-11/12
border
rounded-3xl
p-5
relative
overflow-y-scroll
`
export const SmodalTitle = tw.h1`
text-lg
font-medium
`

export const SmodalFooter = tw.div`
flex
justify-end
gap-2
mt-5
`

export const SmodalButton = tw.button`
data-[close=true]:border-red-500
data-[close=true]:bg-red-100
data-[close=true]:text-red-500
border-green-600
bg-green-100
text-green-600
border
p-3
rounded
`
