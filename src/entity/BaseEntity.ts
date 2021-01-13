import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';

export class BaseEntity<T> {
  @PrimaryGeneratedColumn()
  private readonly id: number;
  @Column({ type: 'uuid' })
  private readonly uid: string;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private createdAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  private updatedAt: Date;
  @Column({ type: 'timestamptz' })
  private removedAt: Date;
}
