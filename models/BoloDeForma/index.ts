import { Product, ProductInterface } from '../Product'
import { Recheio } from '../Recheio'

export interface BoloDeFormaInterface extends ProductInterface {
  coberturas: string[]
  recheios: Recheio[]
}

export class BolodeForma extends Product {
  #coberturas: string[]
  #recheios: Recheio[]

  constructor({
    id,
    name,
    price,
    description,
    category,
    coberturas,
    recheios,
  }: BoloDeFormaInterface) {
    super({ id, name, price, description, category })

    this.#coberturas = coberturas
    this.#recheios = recheios
  }

  get cobertura() {
    return this.#coberturas
  }

  get recheios(): null | Recheio[] {
    if (this.#recheios.length === 0) return null

    return this.#recheios
  }

  addCobertura(option: string): this {
    this.#coberturas.push(option)
    return this
  }

  removeCobertura(option: string) {
    this.#coberturas = this.#coberturas.filter((e) => e !== option)
  }

  addRecheio(option: Recheio): this {
    this.#recheios.push(option)
    return this
  }

  removeRecheio(recheioId: string) {
    this.#recheios = this.#recheios.filter((e) => e.id !== recheioId)
  }
}
