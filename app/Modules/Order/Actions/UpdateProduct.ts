import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProduct {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
