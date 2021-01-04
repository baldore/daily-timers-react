-- CreateTable
CREATE TABLE "Timer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "minutes" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Timer.name_unique" ON "Timer"("name");
