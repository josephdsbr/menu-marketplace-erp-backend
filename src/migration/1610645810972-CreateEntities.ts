import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateEntities1610645810972 implements MigrationInterface {
  name = 'CreateEntities1610645810972'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `payment` (`id` int NOT NULL AUTO_INCREMENT, `uid` varchar(255) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `removedAt` timestamp NOT NULL, `cardToken` varchar(255) NOT NULL, `amount` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `order` (`id` int NOT NULL AUTO_INCREMENT, `uid` varchar(255) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `removedAt` timestamp NOT NULL, `amount` int NOT NULL, `orderDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'CREATE TABLE `order_details` (`id` int NOT NULL AUTO_INCREMENT, `uid` varchar(255) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `removedAt` timestamp NOT NULL, `amount` int NOT NULL, `productId` int NULL, `order_id` int NULL, UNIQUE INDEX `REL_c67ebaba3e5085b6401911acc7` (`productId`), UNIQUE INDEX `REL_3ff3367344edec5de2355a562e` (`order_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
    await queryRunner.query(
      'ALTER TABLE `order_details` ADD CONSTRAINT `FK_c67ebaba3e5085b6401911acc70` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
    await queryRunner.query(
      'ALTER TABLE `order_details` ADD CONSTRAINT `FK_3ff3367344edec5de2355a562ee` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `order_details` DROP FOREIGN KEY `FK_3ff3367344edec5de2355a562ee`'
    )
    await queryRunner.query(
      'ALTER TABLE `order_details` DROP FOREIGN KEY `FK_c67ebaba3e5085b6401911acc70`'
    )
    await queryRunner.query(
      'DROP INDEX `REL_3ff3367344edec5de2355a562e` ON `order_details`'
    )
    await queryRunner.query(
      'DROP INDEX `REL_c67ebaba3e5085b6401911acc7` ON `order_details`'
    )
    await queryRunner.query('DROP TABLE `order_details`')
    await queryRunner.query('DROP TABLE `order`')
    await queryRunner.query('DROP TABLE `payment`')
  }
}
