import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Offer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: boolean

  @column()
  public productId: number

  @column()
  public price: number

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
