const express = require('express');
const router = express.Router();

const cart = [];

router.get("/", (req, res) => {
  res.status(200).json(cart);
});

router.post("/", (req, res) => {
  const { productId } = req.body;
  const product = products.find((p) => p.id == productId);
  if (product) {
    cart.push(product);
    res.status(201).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = router;