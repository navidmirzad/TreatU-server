-- CreateEnum
CREATE TYPE "public"."RoleName" AS ENUM ('BUSINESS', 'ADMIN', 'USER');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "phone" TEXT,
    "refreshToken" TEXT,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetExpires" TIMESTAMP(3),
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "roleId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Business" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CVR" TEXT NOT NULL,
    /* "phone" TEXT, add this */
    "refreshToken" TEXT,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationToken" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetExpires" TIMESTAMP(3),
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "roleId" INTEGER,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "name" "public"."RoleName" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Salon" (
    "salonId" SERIAL NOT NULL,
    "salonName" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "salonTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "address" TEXT,
    "city" TEXT,
    "zipCode" TEXT,
    "country" TEXT,
    "phone" TEXT,

    CONSTRAINT "Salon_pkey" PRIMARY KEY ("salonId")
);

-- CreateTable
CREATE TABLE "public"."SalonType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SalonType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SalonService" (
    "id" SERIAL NOT NULL,
    "salonId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "SalonService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Deal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "originalPrice" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "salonId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WaitingList" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WaitingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_refreshToken_idx" ON "public"."User"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "Business_email_key" ON "public"."Business"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Business_CVR_key" ON "public"."Business"("CVR");

-- CreateIndex
CREATE INDEX "Business_email_idx" ON "public"."Business"("email");

-- CreateIndex
CREATE INDEX "Business_refreshToken_idx" ON "public"."Business"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- CreateIndex
CREATE INDEX "Salon_businessId_idx" ON "public"."Salon"("businessId");

-- CreateIndex
CREATE INDEX "Salon_salonTypeId_idx" ON "public"."Salon"("salonTypeId");

-- CreateIndex
CREATE INDEX "Salon_createdAt_idx" ON "public"."Salon"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SalonType_name_key" ON "public"."SalonType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "public"."Service"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SalonService_salonId_serviceId_key" ON "public"."SalonService"("salonId", "serviceId");

-- CreateIndex
CREATE INDEX "Deal_salonId_idx" ON "public"."Deal"("salonId");

-- CreateIndex
CREATE INDEX "Deal_startDate_idx" ON "public"."Deal"("startDate");

-- CreateIndex
CREATE INDEX "Deal_expiryDate_idx" ON "public"."Deal"("expiryDate");

-- CreateIndex
CREATE INDEX "Deal_createdAt_idx" ON "public"."Deal"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "WaitingList_email_key" ON "public"."WaitingList"("email");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Business" ADD CONSTRAINT "Business_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Salon" ADD CONSTRAINT "Salon_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Salon" ADD CONSTRAINT "Salon_salonTypeId_fkey" FOREIGN KEY ("salonTypeId") REFERENCES "public"."SalonType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SalonService" ADD CONSTRAINT "SalonService_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "public"."Salon"("salonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SalonService" ADD CONSTRAINT "SalonService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deal" ADD CONSTRAINT "Deal_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "public"."Salon"("salonId") ON DELETE RESTRICT ON UPDATE CASCADE;
