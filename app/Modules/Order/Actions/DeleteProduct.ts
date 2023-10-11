import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteProduct {
  public async handle(_: HttpContextContract) {
    return 'ok'
  }
}
