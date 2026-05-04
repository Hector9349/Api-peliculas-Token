const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = "mi_clave_secreta_super_segura";

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const user = {
      id: 1,
      name: "Heber"
    };

    const token = jwt.sign(user, SECRET_KEY, {
      expiresIn: "1h"
    });

    res.json({
      message: "Login exitoso",
      token
    });
  } else {
    res.status(401).json({
      message: "Credenciales inválidas"
    });
  }
});

module.exports = router;
