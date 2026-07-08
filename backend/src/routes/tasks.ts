import { Router } from "express";
import { getTasks, createTask, updateTask, deleteTask  } from "../controllers/tasksController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;