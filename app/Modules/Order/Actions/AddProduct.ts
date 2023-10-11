import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AddProduct {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
