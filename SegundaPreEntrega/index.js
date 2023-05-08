const express = require("express");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});