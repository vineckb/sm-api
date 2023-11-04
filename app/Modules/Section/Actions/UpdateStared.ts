import Section from 'App/Models/Section'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateStared {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params
    const validationSchema = schema.create({
      stared: schema.boolean(),
    })

    const data = await request.validate({ schema: validationSchema })

    await Section.query().where('id', id).update(data)

    return await Section.findOrFail(id)
  }
}
