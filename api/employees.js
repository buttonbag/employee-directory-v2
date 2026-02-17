import express from "express";
// import employees from "#db/employees";

const router = express.Router();

import { getEmployees, getEmployee, getRandomEmployee } from "#db/employees";

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
router.get("/random", (req, res) => {
  res.send(getRandomEmployee());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const employee = getEmployee(id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

export default router;