/*
  Warnings:

  - You are about to drop the column `entry_date` on the `item_in` table. All the data in the column will be lost.
  - You are about to drop the column `out_date` on the `item_out` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `item_in` DROP COLUMN `entry_date`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `item_out` DROP COLUMN `out_date`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
