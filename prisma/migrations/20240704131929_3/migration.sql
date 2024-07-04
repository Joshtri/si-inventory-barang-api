/*
  Warnings:

  - Added the required column `keterangan` to the `item_in` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keterangan` to the `item_out` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item_in` ADD COLUMN `keterangan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `item_out` ADD COLUMN `keterangan` VARCHAR(191) NOT NULL;
