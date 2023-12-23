import { Product, ProductInterface } from '../Product'

export interface ProdutoComEstoqueInterface extends ProductInterface {
  estoque: number
}

export class ProdutoComEstoque extends Product {
  #estoque: number

  constructor({
    id,
    name,
    price,
    description,
    category,
    estoque,
  }: ProdutoComEstoqueInterface) {
    super({ id, name, price, description, category })
    if (estoque < 0) throw new Error('O estoque não pode estar negativo')
    this.#estoque = estoque
  }

  get estoque() {
    return this.#estoque
  }

  addEstoque(quantity: number) {
    if (quantity < 0) throw new Error('O estoque não pode estar negativo')
    this.#estoque += quantity
    return this
  }

  removeEstoque(quantity: number) {
    if (quantity <= 0)
      throw new Error('A quantidade removida não pode ser zero ou negativa')
    if (quantity > this.estoque)
      throw new Error(
        `Não á estoque suficiente, temos ${this.estoque} de estoque e você quer romover ${quantity}`,
      )

    this.#estoque -= quantity
  }
}
