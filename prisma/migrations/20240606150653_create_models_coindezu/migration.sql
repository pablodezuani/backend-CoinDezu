-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Movimentacao_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Movimentacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
