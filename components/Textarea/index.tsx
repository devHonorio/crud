import { forwardRef, useId } from 'react'
import { Scontainer, Slabel } from '../Input/styles'
import { Stextarea } from './styles'

interface TextareaInterface {
  label: string
  placehoalder?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaInterface>(
  function Textarea_({ label, placehoalder = '' }, ref) {
    const id = useId()

    return (
      <Scontainer>
        <Slabel htmlFor={id}>{label}</Slabel>

        <Stextarea id={id} placeholder={placehoalder} ref={ref} />
      </Scontainer>
    )
  },
)

export default Textarea
