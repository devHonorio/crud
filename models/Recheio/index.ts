import { Product, ProductInterface } from '../Product'

export interface RecheioInterface extends ProductInterface {
  pesado?: boolean
  bento?: boolean
}

export class Recheio extends Product {
  #bento: boolean
  #pesado: boolean
  constructor({
    id,
    name,
    price,
    description,
    category,
    bento = true,
    pesado = false,
  }: RecheioInterface) {
    super({ id, name, price, description, category })

    this.#bento = bento
    this.#pesado = pesado
  }

  get bento() {
    return this.#bento
  }

  get pesado() {
    return this.#pesado
  }

  setBento(state: boolean) {
    this.#bento = state
  }

  setPesado(state: boolean) {
    this.#pesado = state
  }
}
