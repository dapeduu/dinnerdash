import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Situation from 'App/Models/Situation'

export default class SituationsController {
  public async index() {
    const orders = await Situation.all()

    return orders
  }

  public async store({ request }: HttpContextContract) {
    const description = request.input('description')

    const situation = await Situation.create({
      description,
    })

    return situation
  }

  public async show({ params }: HttpContextContract) {
    const situationId = params.id

    const situation = await Situation.findOrFail(situationId)

    return situation
  }

  public async update({ params, request }: HttpContextContract) {
    const situationId = params.id
    const description = request.input('description')

    const situation = await Situation.findOrFail(situationId)
    await situation.merge({
      description,
    })
  }

  public async destroy({ params }: HttpContextContract) {
    const situationId = params.id

    const situation = await Situation.findOrFail(situationId)
    await situation.delete()

    return situation
  }
}
