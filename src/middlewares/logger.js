const logger = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} - ${req.method} en ${req.url}`);
  next();
};

module.exports = logger;
