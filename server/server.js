import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

console.log("🔧 Démarrage du serveur...");

// Test des variables d'environnement
console.log("📦 Variables env:", {
  hasMongoURI: !!process.env.MONGODB_URI,
  hasJWTSecret: !!process.env.JWT_SECRET,
  hasCloudinary: !!process.env.CLOUDINARY_CLOUD_NAME
});

// Route ultra simple
app.get("/", (req, res) => {
  console.log("✅ Route / appelée");
  res.send("🚀 SERVEUR EXPRESS FONCTIONNE");
});

app.get("/api/test", (req, res) => {
  res.json({ 
    status: "success", 
    message: "API fonctionne",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    server: "running",
    database: "not_checked",
    cloudinary: "not_checked",
    environment: {
      hasMongo: !!process.env.MONGODB_URI,
      hasJWT: !!process.env.JWT_SECRET,
      hasCloudinary: !!process.env.CLOUDINARY_CLOUD_NAME
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});

console.log("🔧 Configuration Express terminée");