-- CreateTable
CREATE TABLE "Rescue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rescue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rescuer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rescuer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RescuesOnRescuers" (
    "rescueId" INTEGER NOT NULL,
    "rescuerId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "RescuesOnRescuers_pkey" PRIMARY KEY ("rescueId","rescuerId")
);

-- AddForeignKey
ALTER TABLE "RescuesOnRescuers" ADD CONSTRAINT "RescuesOnRescuers_rescueId_fkey" FOREIGN KEY ("rescueId") REFERENCES "Rescue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RescuesOnRescuers" ADD CONSTRAINT "RescuesOnRescuers_rescuerId_fkey" FOREIGN KEY ("rescuerId") REFERENCES "Rescuer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
