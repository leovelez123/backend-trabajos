class ProductManager {
    constructor(products = []) {
      this.products = products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que los campos obligatorios no estén vacíos
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Error: Todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el código del producto
      const exists = this.products.some((product) => product.code === code);
      if (exists) {
        console.error('Error: El código del producto ya existe');
        return;
      }
  
      // Crear el producto con un id autoincrementable
      const product = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      // Agregar el producto al arreglo de productos
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.error('Error: Producto no encontrado');
        return;
      }
      return product;
    }
  }
  
  
  const pm = new ProductManager();
  pm.addProduct('Producto 1', 'Descripción del producto 1', 100, 'img/product1.png', 'PROD1', 10);
  pm.addProduct('Producto 2', 'Descripción del producto 2', 200, 'img/product2.png', 'PROD2', 5);
  console.log(pm.getProducts());
  console.log(pm.getProductById(2));
  console.log(pm.getProductById(3));
  