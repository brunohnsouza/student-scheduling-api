import { Router } from "express";
import StudentController from "./controllers/StudentController.js";

const router = Router();

router.post("/student", StudentController.createStudent);
router.get("/students", StudentController.findAllStudents);
router.get("/student/:id", StudentController.findStudentById);
router.put("/student/:id", StudentController.updateStudent);
router.delete("/student/:id", StudentController.deleteStudent);

export { router };
