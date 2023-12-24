'use client'

import { forwardRef, useId } from 'react'
import { Scontainer, Sinput, Slabel } from './styles'

interface InputInterface {
  label: string
  placehoalder?: string
  type?: 'text' | 'time' | 'url' | 'tel' | 'number' | 'email'
}

const Input = forwardRef<HTMLInputElement, InputInterface>(function Input_(
  { label, placehoalder = '', type = 'text' },
  ref,
) {
  const id = useId()

  return (
    <Scontainer>
      <Slabel htmlFor={id}>{label}</Slabel>

      <Sinput id={id} type={type} placeholder={placehoalder} ref={ref} />
    </Scontainer>
  )
})

export default Input
