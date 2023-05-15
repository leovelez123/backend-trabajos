import productSchema from "../models/productSchema.js";

class productMongooseDao
{
  async find() // getAll, find, list, getproducts
  {
    const productsDocument = await productSchema.find();

    return productsDocument.map(document => ({
      id: document._id,
      name: document.name,
      price: document.price,
      
    }));
  }

  async getOne(id) // getOne, get, getproduct
  {
    const productDocument = await productSchema.findOne({ _id: id });

    return {
        id: productDocument._id,
        name: productDocument.name,
        price: productDocument.price,
        
    }
  }

  async create(data) // create, save, insert
  {
    const productDocument = await productSchema.create(data);

    return {
        id: productDocument._id,
        name: productDocument.name,
        price: productDocument.price,
        
    }
  }

  async updateOne(id, data) // update, updateOne, modify
  {
    const productDocument = await productSchema.findOneAndUpdate({ _id: id }, data, { new: true});

    return {
        id: productDocument._id,
        name: productDocument.name,
        price: productDocument.price,
        
    }
  }

  async deleteOne(id) // delete, deleteOne, remove, removeOne
  {
    return productSchema.deleteOne({ _id: id });
  }
}

export default productMongooseDao;