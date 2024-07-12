-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

);
