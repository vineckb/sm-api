import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'offers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.boolean('status').defaultTo(true)
      table.integer('product_id').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.datetime('starts_at')
      table.datetime('ends_at')

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
