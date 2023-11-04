import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('active').defaultTo(true)
      table.string('barcode').notNullable().unique()

      table.integer('section_id').notNullable()
      table.string('title').notNullable()
      table.string('image_url')

      table.decimal('price', 10, 2).notNullable()
      table.decimal('promotional_price', 10, 2).defaultTo(0)

      table.integer('pack_size').defaultTo(1)
      table.enum('quantity_unity', ['un', 'kg']).defaultTo('un')

      table.integer('quantity_stock').defaultTo(0)
      table.integer('quantity_locked').defaultTo(0)
      table.integer('quantity_sold').defaultTo(0)

      table.timestamp('synced_at', { useTz: true })
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
