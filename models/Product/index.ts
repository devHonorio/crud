export interface ProductInterface {
  id: string
  name: string
  price: number
  description: string
  category: string
}

export class Product {
  #id: string
  #name: string
  #price: number
  #description: string
  #category: string

  constructor({ id, name, price, description, category }: ProductInterface) {
    this.#id = id
    this.#name = name
    this.#price = price
    this.#description = description
    this.#category = category
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get price() {
    return this.#price
  }

  get description() {
    return this.#description
  }

  get category() {
    return this.#category
  }

  setName(name: string) {
    this.#name = name
  }

  setPrice(price: number) {
    this.#price = price
  }

  setDescription(description: string) {
    this.#description = description
  }

  setCategory(category: string) {
    this.#category = category
  }
}
