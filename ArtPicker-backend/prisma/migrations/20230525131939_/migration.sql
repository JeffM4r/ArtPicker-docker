/*
  Warnings:

  - You are about to drop the `fallower` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userCache` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fallower" DROP CONSTRAINT "fallower_fallowedId_fkey";

-- DropForeignKey
ALTER TABLE "fallower" DROP CONSTRAINT "fallower_fallowerId_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_imageId_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_userId_fkey";

-- DropTable
DROP TABLE "fallower";

-- DropTable
DROP TABLE "likes";

-- DropTable
DROP TABLE "userCache";
