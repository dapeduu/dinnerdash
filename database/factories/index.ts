// import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import MealCategory from 'App/Models/MealCategory'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
}).build()

export const MealCategoryFactory = Factory.define(MealCategory, ({ faker }) => {
  return {
    name: faker.random.word(),
  }
}).build()
