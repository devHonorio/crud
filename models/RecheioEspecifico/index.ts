import { Recheio, RecheioInterface } from '../Recheio'

export interface RecheioEspecificoInterface extends RecheioInterface {
  opcionais: string[]
}

export class RecheioEspecifico extends Recheio {
  #opcionais: string[]

  constructor({
    id,
    name,
    price,
    description,
    category,
    bento,
    pesado,
    opcionais,
  }: RecheioEspecificoInterface) {
    super({ id, name, price, description, category, bento, pesado })

    this.#opcionais = opcionais
  }

  get opcionais() {
    return this.#opcionais
  }

  addOpcional(option: string): this {
    this.#opcionais.push(option)
    return this
  }

  removeOptional(option: string) {
    this.#opcionais = this.#opcionais.filter((e) => e !== option)
  }
}
