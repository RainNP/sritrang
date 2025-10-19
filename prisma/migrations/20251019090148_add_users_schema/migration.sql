-- CreateEnum
CREATE TYPE "UserTier" AS ENUM ('NEW_FRIEND', 'REGULAR_FRIEND', 'BEST_FRIEND');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userTier" "UserTier" NOT NULL DEFAULT 'NEW_FRIEND',
    "profilePictureUrl" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
