'use client'

import { Scontainer, SerrorMessage, Sinput, Slabel } from './styles'
import { InputHTMLAttributes, forwardRef, useId } from 'react'

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
}

const Input = forwardRef<HTMLInputElement, InputInterface>(
  (
    {
      label,
      type = 'text',
      required = true,
      errorMessage = '',
      ...props
    }: InputInterface,
    ref,
  ) => {
    const inputId = useId()
    return (
      <Scontainer>
        <Slabel htmlFor={inputId}>{label}</Slabel>
        <Sinput
          id={inputId}
          type={type}
          required={required}
          ref={ref}
          {...props}
          data-error={!!errorMessage}
        />
        {errorMessage && <SerrorMessage>{errorMessage}</SerrorMessage>}
      </Scontainer>
    )
  },
)

export default Input
