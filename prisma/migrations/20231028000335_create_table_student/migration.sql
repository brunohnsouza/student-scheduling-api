-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "firstSemesterScore" DOUBLE PRECISION NOT NULL,
    "secondSemesterScore" DOUBLE PRECISION NOT NULL,
    "teacherName" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
