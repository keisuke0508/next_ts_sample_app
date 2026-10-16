-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `selected` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `ShippingAddress` ADD COLUMN `selected` BOOLEAN NOT NULL DEFAULT false;
