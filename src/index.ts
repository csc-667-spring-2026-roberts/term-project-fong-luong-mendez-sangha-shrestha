import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import homeRoutes from "./routes/home.js";
import loggingMiddleware from "./middleware/logging.js";

const app = express();
// Use PORT environment variable if set, otherwise default to 3000
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files
app.use(express.static(path.join(__dirname, "..", "public")));

// Parse JSON request bodies
app.use(express.json());
// Parse form data
app.use(express.urlencoded({ extended: true }));

app.use(loggingMiddleware);
app.use("/", homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${String(PORT)}`);
});
