import Section from 'App/Models/Section'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateSection {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params
    const section = await Section.findOrFail(id)

    const validationSchema = schema.create({
      title: schema.string(),
      active: schema.boolean.optional(),
    })

    const data = await request.validate({ schema: validationSchema })

    return await section.fill(data)
  }
}
