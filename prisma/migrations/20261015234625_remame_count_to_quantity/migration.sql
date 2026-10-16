/*
  Warnings:

  - You are about to drop the column `count` on the `CartProduct` table. All the data in the column will be lost.
  - You are about to drop the column `productCount` on the `Order` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `CartProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuantity` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CartProduct` DROP COLUMN `count`,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `productCount`,
    ADD COLUMN `totalQuantity` INTEGER NOT NULL;
