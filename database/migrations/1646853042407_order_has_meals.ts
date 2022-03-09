import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderHasMeals extends BaseSchema {
  protected tableName = 'order_has_meals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('order_id').unsigned().references('orders.id')
      table.integer('meal_id').unsigned().references('meals.id')

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
