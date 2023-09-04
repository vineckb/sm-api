import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteUser {
  public async handle({ params }: HttpContextContract) {
    await User.query().where('id', params.id).delete()
  }
}
