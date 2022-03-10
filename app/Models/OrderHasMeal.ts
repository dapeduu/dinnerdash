import { DateTime } from 'luxon'
import { afterSave, BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Meal from './Meal'
import Order from './Order'

export default class OrderHasMeal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public mealId: number

  @belongsTo(() => Meal)
  public meal: BelongsTo<typeof Meal>

  @column()
  public orderId: number

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>

  @afterSave()
  public static async updateOrderPrice(orderHasMeal: OrderHasMeal) {
    const order = await Order.findOrFail(orderHasMeal.orderId)

    await order.updatePrice(order)
  }
}
