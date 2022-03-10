import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Situation from './Situation'
import OrderHasMeal from './OrderHasMeal'
import Meal from './Meal'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public situationId: string

  @belongsTo(() => Situation)
  public situation: BelongsTo<typeof Situation>

  @hasMany(() => OrderHasMeal)
  public orderHasMeal: HasMany<typeof OrderHasMeal>

  public async updatePrice(order: Order) {
    await order.load('orderHasMeal')

    const orderHasMeals = order.$getRelated('orderHasMeal') as OrderHasMeal[]

    const getMealAndQuantity = async (orderHasMeal: OrderHasMeal) => {
      const meal = await Meal.findOrFail(orderHasMeal.mealId)
      const quantity = orderHasMeal.quantity

      return {
        meal,
        quantity,
      }
    }

    const meals = await Promise.all(
      orderHasMeals.map(async (orderHasMeal) => await getMealAndQuantity(orderHasMeal))
    )

    const mealsPrices = meals.map(({ meal, quantity }) => meal.price * quantity)
    const sumOfPrices = mealsPrices.reduce((a, b) => a + b, 0)

    order.price = sumOfPrices
    await order.save()
  }
}
