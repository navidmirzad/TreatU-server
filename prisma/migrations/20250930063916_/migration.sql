-- AlterTable
ALTER TABLE "public"."Business" ADD COLUMN     "JWTToken" TEXT;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "JWTToken" TEXT;
