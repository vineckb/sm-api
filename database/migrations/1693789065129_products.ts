import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('section_id').notNullable()
      table.string('title').notNullable()
      table.string('sku').notNullable().unique()
      table.string('barcode').notNullable().unique()
      table.decimal('price', 10, 2).notNullable()
      table.string('external_id').unique()
      table.integer('quantity_stock').defaultTo(0)
      table.integer('quantity_locked').defaultTo(0)

      table.timestamp('synced_at', { useTz: true })
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
