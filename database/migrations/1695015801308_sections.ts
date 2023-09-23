import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sections'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.boolean('active').defaultTo(true)
      table.string('title').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
