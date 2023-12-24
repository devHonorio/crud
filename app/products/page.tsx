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
import { useState } from 'react'

export default function Products() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Layout>
      <h1>Olá, mundo!!</h1>

      <SmodalButton onClick={() => setIsOpen(true)}>Open modal</SmodalButton>
      <Modal isOpen={isOpen}>
        <SmodalTitle>Teste</SmodalTitle>

        <Input label="id" />
        <Input label="Nome" />
        <Input label="Preço" type="number" />
        <Input label="Categoria" />
        <Textarea label="Descrição" />

        <SmodalFooter>
          <SmodalButton data-close onClick={() => setIsOpen(false)}>
            Cancelar
          </SmodalButton>
          <SmodalButton>Salvar</SmodalButton>
        </SmodalFooter>
      </Modal>
    </Layout>
  )
}
