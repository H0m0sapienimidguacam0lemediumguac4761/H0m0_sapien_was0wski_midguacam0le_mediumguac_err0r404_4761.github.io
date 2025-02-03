const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
const PORT = 3000;

const SECRET_TOKEN = "H0m0-sapien-was0wski-iam-fatape-4761-midguacam0le-mediumguac.gwithub.i0";
const USERNAME = "Inter_forks";
const PASSWORD_HASH = bcrypt.hashSync("Toilet4761", 10); // Hash the password for security

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && bcrypt.compareSync(password, PASSWORD_HASH)) {
    const token = jwt.sign({ username }, SECRET_TOKEN, { expiresIn: "2h" });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
    require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
const SECRET_TOKEN = process.env.SECRET_TOKEN;
const USERNAME = process.env.ADMIN_USERNAME;
const PASSWORD_HASH = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && bcrypt.compareSync(password, PASSWORD_HASH)) {
    const token = jwt.sign({ username }, SECRET_TOKEN, { expiresIn: "2h" });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected home page route
app.get("/home", authenticateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

// Admin-only route
app.get("/admin", authenticateToken, (req, res) => {
  if (req.user.username !== USERNAME) {
    return res.status(403).json({ message: "Access denied" });
  }
  res.send("Welcome to the admin panel!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

  }
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(403);
  

  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected home page route
app.get("/home", authenticateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
