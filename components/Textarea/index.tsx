import { Scontainer, SerrorMessage, Slabel } from '../Input/styles'
import { Stextarea } from './styles'
import { TextareaHTMLAttributes, forwardRef, useId } from 'react'

interface TextareaInterface
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errorMessage?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaInterface>(
  (
    { label, required = true, errorMessage = '', ...props }: TextareaInterface,
    ref,
  ) => {
    const textareaId = useId()
    return (
      <Scontainer>
        <Slabel htmlFor={textareaId}>{label}</Slabel>
        <Stextarea
          id={textareaId}
          required={required}
          ref={ref}
          data-error={!!errorMessage}
          {...props}
        />
        {errorMessage && <SerrorMessage>{errorMessage}</SerrorMessage>}
      </Scontainer>
    )
  },
)

export default Textarea
