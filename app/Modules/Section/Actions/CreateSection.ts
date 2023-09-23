import Section from 'App/Models/Section'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreateSection {
  public async handle({ request }: HttpContextContract) {
    const validationSchema = schema.create({
      title: schema.string(),
      active: schema.boolean.optional(),
    })

    const data = await request.validate({ schema: validationSchema })

    return await Section.create(data)
  }
}
