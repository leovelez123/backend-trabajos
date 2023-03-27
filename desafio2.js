const fs = require("fs").promises;

class ProductManager {
  idAuto = 1;
  #products = [];
  path = ``; 

  constructor() {
    this.#products = [];
    this.path = `./products.json`;
  }

  async getProducts() {
    try {
      const productFile = await fs.readFile(this.path, "utf-8");
      return JSON.parse(productFile);
    } catch (e) {
      await fs.writeFile(this.path, "[]");
      return "No existe el archivo. Ya se creo uno con un array vacio";
    }
  }

  async addProducts(product) {
    try {
      const productFile = await fs.readFile(this.path, "utf-8");
      let newProduct = JSON.parse(productFile);

      const valid = newProduct.find(
        (p) => p.id === product.id || p.code === product.code
      );

      if (valid) {
        throw new Error("ID O CODE REPETIDO, NO SE PUEDE CREAR EL OBJETO.");
      }

      if (newProduct.length > 0) {
        const lastProduct = newProduct[newProduct.length - 1];
        this.idAuto = lastProduct.id + 1;
      }

      newProduct.push({
        id: this.idAuto++,
        ...product,
      });

      await fs.writeFile(this.path, JSON.stringify(newProduct, null, 2));
      return "OBJETO CREADO CORRECTAMENTE!!";
    } catch (e) {
      throw new Error(e);
    }
  }

  async getProductById(id) {
    try {
      const productFile = await fs.readFile(this.path, "utf-8");
      let idProduct = JSON.parse(productFile);

      const searchProduct = idProduct.find((p) => p.id === id);

      if (!searchProduct) {
        throw new Error("NO SE ENCONTRO EL PRODUCTO.");
      }
      return searchProduct;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateProduct(id, product) {
    try {
      const productFile = await fs.readFile(this.path, "utf-8");
      let products = JSON.parse(productFile);

      const idProduct = products.findIndex((p) => p.id === id);

      products.splice(idProduct, 1, { id, ...product });

      await fs.writeFile(this.path, JSON.stringify(products, null, 2));

      return `PRODUCTO MODIFICADO CORRECTAMENTE!!`;
    } catch (e) {
      throw new Error(e);
    }
  }
  async deleteProduct(id) {
    try {
      const productFile = await fs.readFile(this.path, "utf-8");
      let products = JSON.parse(productFile);

      const idProduct = products.find((p) => p.id === id);

      if (!idProduct) {
        throw new Error("EL ID NO EXISTE.");
      }
      const deletedProducts = products.filter((p) => p.id !== id);

      await fs.writeFile(this.path, JSON.stringify(deletedProducts, null, 2));

      return `PRODUCTO ELIMINADO CORRECTAMENTE!!`;
    } catch (e) {
      throw new Error(e);
    }
  }
}


const product1 = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};


const pm = new ProductManager();

const generate = async () => {
 
  console.log(await pm.addProducts({ ...product1, code: "chau" }));
  
  console.log(await pm.getProducts());
};


const main = async () => {
  
  console.log("Lista Productos: ", await pm.getProducts());
 
  console.log("Producto Encontrado: ", await pm.getProductById(2));

  
  console.log(await pm.updateProduct(2, { ...product1, code: "MODIFICADO" }));
  console.log("Lista Productos MODIFICADO: ", await pm.getProducts());

  
  console.log(await pm.deleteProduct(2));
  console.log("Lista Productos ELIMINADO: ", await pm.getProducts());
};

main();