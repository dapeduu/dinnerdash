import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({}: HttpContextContract) {
    const orders = await Order.all()

    return orders
  }

  public async store({ request }: HttpContextContract) {
    const price = request.input('price')
    const userId = request.input('userId')
    const situationId = request.input('situationId')

    const order = await Order.create({
      price,
      userId,
      situationId,
    })

    return order
  }

  public async show({ params }: HttpContextContract) {
    const orderId = params.id

    const order = await Order.findOrFail(orderId)
    await order.load('situation')
    await order.load('user')

    return order
  }

  public async update({ params, request }: HttpContextContract) {
    const orderId = params.id
    const situationId = request.input('situationId')
    const price = request.input('price')

    const order = await Order.findOrFail(orderId)
    await order.merge({
      price,
      situationId,
    })
    await order.save()

    return order
  }

  public async destroy({ params }: HttpContextContract) {
    const orderId = params.id

    const order = await Order.findOrFail(orderId)
    await order.delete()

    return order
  }
}
