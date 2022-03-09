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

    const orderHasMeal = await Order.create({
      price,
      userId,
      situationId,
    })

    return orderHasMeal
  }

  public async show({ params }: HttpContextContract) {
    const orderId = params.id

    const orderHasMeal = await Order.findOrFail(orderId)

    return orderHasMeal
  }

  public async update({ params, request }: HttpContextContract) {
    const orderId = params.id
    const price = request.input('price')

    const orderHasMeal = await Order.findOrFail(orderId)
    await orderHasMeal.merge({
      price,
    })
  }

  public async destroy({ params }: HttpContextContract) {
    const orderId = params.id

    const orderHasMeal = await Order.findOrFail(orderId)
    await orderHasMeal.delete()

    return orderHasMeal
  }
}
