import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { MealFactory } from 'Database/factories'

export default class MealSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await MealFactory.with('mealCategory').createMany(10)
  }
}
