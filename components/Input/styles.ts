import tw from 'tailwind-styled-components'

export const Scontainer = tw.div`
flex
flex-col
gap-1
`
export const Slabel = tw.label`
mt-2
text-gray-700
cursor-pointer
`

export const Sinput = tw.input`
border
rounded-2xl
px-5
py-6
data-[error=true]:border-red-500
`

export const SerrorMessage = tw.p`
text-xs
text-red-500
`
