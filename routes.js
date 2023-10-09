const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getTodo);
router.post("/todos", controller.addTodo);
router.patch("/todos/:id", controller.updateTodo);
router.put("/todos/:id", controller.statusTodo);
router.delete("/todos/:id", controller.deleteTodo);

module.exports = router;
