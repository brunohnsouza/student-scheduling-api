import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  async createStudent(req, res) {
    try {
      const {
        name,
        age,
        firstSemesterScore,
        secondSemesterScore,
        teacherName,
        roomNumber,
      } = req.body;

      const student = await prisma.student.create({
        data: {
          name,
          age,
          firstSemesterScore,
          secondSemesterScore,
          teacherName,
          roomNumber,
        },
      });

      return res.status(201).json(student);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findAllStudents(req, res) {
    try {
      const students = await prisma.student.findMany();

      return res.status(200).json(students);
    } catch (error) {
      return res.json({ error });
    }
  },

  async findStudentById(req, res) {
    try {
      const { id } = req.params;
      const student = await prisma.student.findUnique({
        where: { id: Number(id) },
      });

      if (!student)
        return res.status(204).json({ message: "Aluno não encontrado" });

      return res.status(200).json(student);
    } catch (error) {
      return res.json({ error });
    }
  },

  async updateStudent(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        age,
        firstSemesterScore,
        secondSemesterScore,
        teacherName,
        roomNumber,
      } = req.body;
      let student = await prisma.student.findUnique({
        where: { id: Number(id) },
      });

      if (!student)
        return res.status(204).json({ message: "Aluno não encontrado" });

      student = await prisma.student.update({
        where: { id: Number(id) },
        data: {
          name,
          age,
          firstSemesterScore,
          secondSemesterScore,
          teacherName,
          roomNumber,
        },
      });

      return res.status(200).json(student);
    } catch (error) {
      return res.json({ error });
    }
  },

  async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      const student = await prisma.student.findUnique({
        where: { id: Number(id) },
      });

      if (!student)
        return res.status(204).json({ message: "Aluno não encontrado" });

      await prisma.student.delete({ where: { id: Number(id) } });

      return res.status(200).json({ message: "Aluno deletado" });
    } catch (error) {
      return res.json({ error });
    }
  },
};
