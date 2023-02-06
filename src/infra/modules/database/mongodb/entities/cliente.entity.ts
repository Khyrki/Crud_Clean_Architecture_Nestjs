import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
} from 'typeorm';

@Entity({ name: 'cliente' })
export class ClienteEntity {
  @ObjectIdColumn()
  id: ObjectID | string;

  @Column()
  nome: string;

  @Column()
  sexo: string;

  @Column()
  idade: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'create_at',
  })
  create_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'upadte_at',
  })
  update_at: Date;
}
