import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MealCategory from 'App/Models/MealCategory'

export default class MealCategoriesController {
  public async index() {
    return await MealCategory.all()
  }

  public async store({ request }: HttpContextContract) {
    const name = request.input('name')

    return await MealCategory.create({
      name,
    })
  }

  public async show({ params }: HttpContextContract) {
    const mealCategoryId = params?.id

    const mealCategory = await MealCategory.findOrFail(mealCategoryId)
    await mealCategory.load('meals')

    return mealCategory
  }

  public async update({ params, request }: HttpContextContract) {
    const mealCatetegoryId = params?.id
    const name = request.input('name')

    const mealCategory = await MealCategory.findOrFail(mealCatetegoryId)
    mealCategory.name = name

    return await mealCategory.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const mealCatetegoryId = params?.id
    const mealCategory = await MealCategory.findOrFail(mealCatetegoryId)

    return await mealCategory.delete()
  }
}
