const jwt = require("jsonwebtoken");

const SECRET_KEY = "mi_clave_secreta_super_segura";

const validarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Token requerido"
    });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Token inválido o expirado"
      });
    }

    req.user = decoded;
    next();
  });
};

module.exports = validarToken;
