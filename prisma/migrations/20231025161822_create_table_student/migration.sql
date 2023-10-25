-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "firstSemesterScore" REAL NOT NULL,
    "secondSemesterScore" REAL NOT NULL,
    "teacherName" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL
);
