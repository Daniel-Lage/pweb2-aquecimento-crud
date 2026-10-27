/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Candy` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Candy_nome_key" ON "Candy"("nome");
