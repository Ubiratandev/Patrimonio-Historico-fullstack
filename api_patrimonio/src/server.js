import express from "express";
import "dotenv/config";
import authorRoutes from "./routes/authorRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import itemAuthorRoutes from "./routes/itemAuthorRoutes.js"
import itemRoutes from "./routes/itemRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import categoryItems from "./routes/categoryItemsRoutes.js"
import itemImages from "./routes/itemImagesRoutes.js"
import stagingTable from "./routes/stagingTableRoutes.js"
import authTable from "./routes/authRoutes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(authorRoutes);
app.use(categoryRoutes);
app.use(itemAuthorRoutes);
app.use(itemRoutes);
app.use(adminRoutes);
app.use(categoryItems);
app.use(itemImages);
app.use(stagingTable);
app.use(authTable);
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});