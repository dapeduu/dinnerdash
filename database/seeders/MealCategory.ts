import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { MealCategoryFactory } from 'Database/factories'

export default class MealCategorySeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await MealCategoryFactory.createMany(10)
  }
}
