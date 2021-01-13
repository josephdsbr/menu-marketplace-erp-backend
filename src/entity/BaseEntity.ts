import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'

export class BaseEntity<T> {
  @PrimaryGeneratedColumn()
  readonly id: number
  @Column({ type: 'uuid' })
  readonly uid: string
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
  @Column({ type: 'timestamp' })
  removedAt: Date
}
