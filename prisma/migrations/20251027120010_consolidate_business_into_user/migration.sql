/*
  Warnings:

  - You are about to drop the column `businessId` on the `Salon` table. All the data in the column will be lost.
  - You are about to drop the `Business` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Salon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Salon" DROP CONSTRAINT "Salon_businessId_fkey";

-- DropIndex
DROP INDEX "public"."Salon_businessId_idx";

-- AlterTable
ALTER TABLE "public"."Salon" DROP COLUMN "businessId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "CVR" TEXT,
ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "zipCode" TEXT;

-- DropTable
DROP TABLE "public"."Business";

-- CreateIndex
CREATE INDEX "Salon_userId_idx" ON "public"."Salon"("userId");

-- CreateIndex
CREATE INDEX "User_CVR_idx" ON "public"."User"("CVR");

-- AddForeignKey
ALTER TABLE "public"."Salon" ADD CONSTRAINT "Salon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
