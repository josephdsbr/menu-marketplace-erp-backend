import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductMigration1610566626332 implements MigrationInterface {
    name = 'ProductMigration1610566626332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `uid` varchar(255) NOT NULL, `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `removedAt` timestamp NOT NULL, `name` varchar(255) NOT NULL, `imgUrl` varchar(255) NOT NULL, `price` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `product`");
    }

}
