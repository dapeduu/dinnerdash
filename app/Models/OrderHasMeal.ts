import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
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

  @hasOne(() => Meal)
  public meal: HasOne<typeof Meal>

  @column()
  public orderId: number

  @hasOne(() => Order)
  public order: HasOne<typeof Order>
}
