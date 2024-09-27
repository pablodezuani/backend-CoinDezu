-- CreateTable
CREATE TABLE "Confirmacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoPresenca" TEXT NOT NULL,
    "acompanhantes" TEXT,
    "aceitaTermos" BOOLEAN NOT NULL,

    CONSTRAINT "Confirmacao_pkey" PRIMARY KEY ("id")
);
