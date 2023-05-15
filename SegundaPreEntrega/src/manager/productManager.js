import productMongooseDao from "../dao/productMongooseDao";

class ProductManager
{
  constructor()
  {
     this.productDao = new productMongooseDao();
     // this.courseDao = new CourseMongooseDao();
  }

  async find() // getAll, find, list, getproducts
  {
    return this.productDao.find();
  }

  async getOne(id) // getOne, get, getproduct
  {
    return this.productDao.getOne(id);
  }

  async create(data) // create, save, insert
  {
    const product = await this.productDao.create(data);

    // const course = this.courseDao.findOne(product.course); // Siendo que course sea un ID

    // Genero logica de negocio.
    // Uso el course que obtuve

    return product;
  }

  async updateOne(id, data) // update, updateOne, modify
  {
    return this.productDao.updateOne(id, data);
  }

  async deleteOne(id) // delete, deleteOne, remove, removeOne
  {
    return this.productDao.deleteOne(id);
  }
}

export default ProductManager;