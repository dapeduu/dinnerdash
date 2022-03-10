import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrderHasMeal from 'App/Models/OrderHasMeal'

export default class OrderHasMealsController {
  public async index({}: HttpContextContract) {
    const orders = await OrderHasMeal.all()

    return orders
  }

  public async store({ request }: HttpContextContract) {
    const mealId = request.input('mealId')
    const orderId = request.input('orderId')
    const quantity = request.input('quantity')

    const orderHasMeal = await OrderHasMeal.create({
      mealId,
      orderId,
      quantity,
    })

    return orderHasMeal
  }

  public async show({ params }: HttpContextContract) {
    const orderHasMealId = params.id

    const orderHasMeal = await OrderHasMeal.findOrFail(orderHasMealId)
    await orderHasMeal.load('meal')
    await orderHasMeal.load('order')

    return orderHasMeal
  }

  public async update({ params, request }: HttpContextContract) {
    const orderHasMealId = params.id
    const quantity = request.input('quantity')

    const orderHasMeal = await OrderHasMeal.findOrFail(orderHasMealId)
    await orderHasMeal.merge({
      quantity,
    })
    await orderHasMeal.save()

    return orderHasMeal
  }

  public async destroy({ params }: HttpContextContract) {
    const orderHasMealId = params.id

    const orderHasMeal = await OrderHasMeal.findOrFail(orderHasMealId)
    await orderHasMeal.delete()

    return orderHasMeal
  }
}
