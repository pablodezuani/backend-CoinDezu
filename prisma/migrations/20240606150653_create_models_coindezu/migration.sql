-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);



-- AddForeignKey
ALTER TABLE "Movimentacao" ADD CONSTRAINT "Movimentacao_category_id_fkey" FOREIGN KEY ("Movimentacao_id") REFERENCES "Movimentacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
