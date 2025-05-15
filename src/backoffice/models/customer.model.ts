export class Customer {
  public name: string;
  public document: string;
  public email: string;
  public password: string;
  public active: boolean;

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
