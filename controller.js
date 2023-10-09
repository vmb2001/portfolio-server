const db = require("./db");

exports.getTodo = (req, res) => {
  const sqlSelect = "SELECT * FROM todos";
  db.query(sqlSelect, (err, result) => {
    if (err) res.status(404).json("error" + { err });
    else res.send(result);
  });
};

exports.addTodo = (req, res) => {
  const { id, task, completed } = req.body;

  const sqlAdd = "INSERT INTO todos(id,task,completed)VALUES(?,?,?)";
  db.query(sqlAdd, [id, task, completed], (err, result) => {
    if (result.affectedRows > 0) res.send(result);
    else res.status(404).json({ message: "error in insertion" });
  });
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;

  const sqlDel = "DELETE FROM todos WHERE id=?";
  db.query(sqlDel, [id], (err, result) => {
    if (result.affectedRows > 0) res.send(result);
    else res.status(404).json({ message: "error in deletion" });
  });
};

exports.statusTodo = (req, res) => {
  const id = req.params.id;

  const sqlStatus = "UPDATE todos SET completed = !completed WHERE id=?";
  db.query(sqlStatus, [id], (err, result) => {
    if (result.affectedRows > 0) res.send(result);
    else res.status(404).json({ message: "error in updation" });
  });
};

exports.updateTodo = (req, res) => {
  const id = req.params.id;
  const { task } = req.body;

  const sqlUpdate = "UPDATE todos SET task = ? WHERE id=?";
  db.query(sqlUpdate, [task, id], (err, result) => {
    if (result.affectedRows > 0) res.send(result);
    else res.status(404).json({ message: "error in updation" });
  });
};
