import { DateTime } from 'luxon'
import { BaseModel, HasOne, ManyToMany, column, hasOne, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Offer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public active: boolean

  @column()
  public title: string

  @manyToMany(() => Product, {
    pivotColumns: ['promotionalPrice'],
  })
  public products: ManyToMany<typeof Product>

  @column.dateTime()
  public startsAt: DateTime

  @column.dateTime()
  public endsAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Product, {
    foreignKey: 'id',
  })
  public product: HasOne<typeof Product>
}
