import { Address } from './address.model'
import { CreditCard } from './credit-card.model'
import { Pet } from './pet.model'

export class Customer {
  public name: string,
  public document: string,
  public email: string,
  public pets: Pet[],
  public billingAddress: Address,
  public shippingAddress: Address,
  public creditCard: CreditCard,
  public password: string,
  public active: boolean,

  constructor(
    name: string,
    document: string,
    email: string,
    password: string,
    active: boolean,
  ) {
    this.name = name;
    this.document = document;
    this.email = email;

    this.password = password;
    this.active = active;
  }
}
