import { Request, Response } from "express";

// List all tasks
export const getTasks = (req: Request, res: Response) => {
  res.send("List all tasks");
};

// Create task
export const createTask = (req: Request, res: Response) => {
  res.send("Task created");
};

// Update task
export const updateTask = (req: Request, res: Response) => {
  res.send("Task updated");
};

// Delete task
export const deleteTask = (req: Request, res: Response) => {
  res.send("Task deleted");
}