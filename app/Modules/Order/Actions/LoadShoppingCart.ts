import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoadShoppingCart {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
