import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Checkout {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
