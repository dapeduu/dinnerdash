import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MealCategory from './MealCategory'
import OrderHasMeal from './OrderHasMeal'

export default class Meal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public available: boolean

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public mealCategoryId: string

  @hasMany(() => OrderHasMeal)
  public orderHasMeal: HasMany<typeof OrderHasMeal>

  @belongsTo(() => MealCategory)
  public mealCategory: BelongsTo<typeof MealCategory>
}
