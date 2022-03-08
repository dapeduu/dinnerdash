import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Meals extends BaseSchema {
  protected tableName = 'meals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 45).notNullable().unique()
      table.string('description', 255).notNullable()
      table.decimal('price', 10.2).notNullable()
      table.boolean('available').defaultTo(false)
      table.string('image').defaultTo('No image found')

      table.integer('meal_category_id').unsigned().references('meal_categories.id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
