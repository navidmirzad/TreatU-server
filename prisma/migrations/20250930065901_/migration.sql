/*
  Warnings:

  - You are about to drop the column `JWTToken` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `JWTToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "JWTToken",
ADD COLUMN     "accessToken" TEXT;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "JWTToken",
ADD COLUMN     "accessToken" TEXT;
