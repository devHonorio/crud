'use client'

import Input from '@/components/Input'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import {
  SmodalButton,
  SmodalFooter,
  SmodalTitle,
} from '@/components/Modal/styles'
import Textarea from '@/components/Textarea'
import { Product } from '@/models/Product'
import { zodResolver } from '@hookform/resolvers/zod'
// import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  id: z.string(),
  Nome: z.string().min(4, 'O nome deve conter pelomenos quatro letras'),
  Preço: z.number().nonnegative('O preço não pode ser negativo.'),
  Categoria: z.string(),
  Descrição: z.string(),
})
export interface IFormValues extends z.infer<typeof schema> {}

export default function Products() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const submit = ({ id, Nome, Preço, Categoria, Descrição }: IFormValues) => {
    console.log(errors.Nome?.message)

    const product = new Product({
      id,
      name: Nome,
      price: +Preço,
      category: Categoria,
      description: Descrição,
    }).objectLiteral
    console.log(product)

    // axios.post('http://localhost:3001/products', product)
  }
  return (
    <Layout>
      <h1>Olá, mundo!!</h1>

      <SmodalButton onClick={() => setIsOpen(true)}>Open modal</SmodalButton>
      <Modal isOpen={isOpen}>
        <SmodalTitle>Teste</SmodalTitle>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="id"
            {...register('id')}
            errorMessage={errors.id?.message}
          />
          <Input
            label="Nome"
            {...register('Nome')}
            errorMessage={errors.Nome?.message}
          />
          <Input
            label="Preço"
            type="number"
            errorMessage={errors.Preço?.message}
            {...register('Preço', {
              setValueAs: (value: string) => parseInt(value, 10),
            })}
          />
          <Input
            label="Categoria"
            {...register('Categoria')}
            errorMessage={errors.Categoria?.message}
          />
          <Textarea
            label="Descrição"
            {...register('Descrição')}
            errorMessage={errors.Descrição?.message}
          />

          <SmodalFooter>
            <SmodalButton
              data-close
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </SmodalButton>
            <SmodalButton type="submit">Salvar</SmodalButton>
          </SmodalFooter>
        </form>
      </Modal>
    </Layout>
  )
}
