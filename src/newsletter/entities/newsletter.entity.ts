import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'newsletters',
})
export class Newsletter extends Model {
  @Column
  content: string;
}
