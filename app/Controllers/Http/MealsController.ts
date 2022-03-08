import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Meal from 'App/Models/Meal'
import MealCategory from 'App/Models/MealCategory'

export default class MealsController {
  public async index() {
    const meals = await Meal.all()

    return meals
  }

  public async store({ request }: HttpContextContract) {
    const { name, description, price, available, mealCategoryId } = request.body()
    const image = request.file('image')

    await image?.moveToDisk('meal-images', {
      contentType: 'image/ief',
      name: `Meal-${name}.${image.extname}`,
    })

    const imageUrl = image?.filePath

    const mealCategory = await MealCategory.findOrFail(mealCategoryId)
    const meal = await mealCategory.related('meals').create({
      name,
      description,
      price,
      available,
      image: imageUrl,
    })

    return meal
  }

  public async show({ params }: HttpContextContract) {
    const mealId = params?.id

    const meal = await Meal.findOrFail(mealId)
    await meal.load('mealCategory')

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
