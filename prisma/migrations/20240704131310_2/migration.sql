-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_lengkap` VARCHAR(50) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_in` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_code` VARCHAR(10) NOT NULL,
    `item_name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `entry_date` DATETIME(3) NOT NULL,
    `item_type` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,
    `user_nama` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_out` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_code` VARCHAR(10) NOT NULL,
    `item_name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `out_date` DATETIME(3) NOT NULL,
    `item_type` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,
    `user_nama` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `item_in` ADD CONSTRAINT `item_in_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_out` ADD CONSTRAINT `item_out_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
