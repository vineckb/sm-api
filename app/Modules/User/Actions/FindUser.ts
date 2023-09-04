import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FindUser {
  public async handle({ params }: HttpContextContract) {
    return await User.findOrFail(params.id)
  }
}
