import express from "express";
import tasksRouter from "./routes/tasks";

const app = express();

app.use(express.json());

app.use("/tasks", tasksRouter);

app.get("/", (req, res) =>{
  res.send("API working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

