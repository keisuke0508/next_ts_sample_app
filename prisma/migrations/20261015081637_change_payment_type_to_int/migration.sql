/*
  Warnings:

  - You are about to alter the column `paymentType` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `paymentType` INTEGER NOT NULL;
