import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Meal from 'App/Models/Meal'

export default class MealsController {
  public async index() {
    const meals = await Meal.all()

    return meals
  }

  public async store({ request }: HttpContextContract) {
    const { name, description, price, available } = request.body()

    const meal = await Meal.create({
      name,
      description,
      price,
      available,
    })

    return meal
  }

  public async show({ params }: HttpContextContract) {
    const mealId = params?.id

    const meal = await Meal.findOrFail(mealId)

    return meal
  }

  public async update({ request, params }: HttpContextContract) {
    const mealId = params?.id
    const { name, description, price, available } = request.body()

    const meal = await Meal.findOrFail(mealId)
    await meal.merge({
      name,
      description,
      price,
      available,
    })

    return await meal.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const mealId = params?.id

    const meal = await Meal.findOrFail(mealId)

    return await meal.delete()
  }
}
