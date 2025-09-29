/*
  Warnings:

  - You are about to drop the column `roleId` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Business" DROP CONSTRAINT "Business_roleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "public"."Business" DROP COLUMN "roleId",
ADD COLUMN     "role" "public"."RoleName";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "roleId",
ADD COLUMN     "role" "public"."RoleName";

-- DropTable
DROP TABLE "public"."Role";
