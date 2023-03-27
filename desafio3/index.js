import  express  from "express";
import ProductManager from "./ProductManager";

const ProductManager = new ProductManager()

const app = express();
const PORT = 8080;

app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  const products = await productManager.getProducts();
  const result = limit ? products.slice(0, limit) : products;
  res.json(result);
});

app.get("/products/:pid", async (req, res) => {
  const productId = req.params.pid;
  const product = await productManager.getProductById(productId);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});