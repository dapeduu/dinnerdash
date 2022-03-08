// import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import MealCategory from 'App/Models/MealCategory'
import Meal from 'App/Models/Meal'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()

export const MealFactory = Factory.define(Meal, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    available: faker.datatype.boolean(),
  }
})
  .relation('mealCategory', () => MealCategoryFactory)
  .build()

export const MealCategoryFactory = Factory.define(MealCategory, ({ faker }) => {
  return {
    name: faker.random.word(),
  }
}).build()
