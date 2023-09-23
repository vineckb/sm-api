import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListUsers {
  public async handle({ request }: HttpContextContract) {
    const filters = request.input('filters')

    if (!filters) {
      return User.all()
    }

    const query = User.query()

    Object.keys(filters).forEach((filter) => {
      query.where(filter, filters[filter])
    })

    return query.select('*')
  }
}
