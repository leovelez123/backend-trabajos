import productsManager from "../managers/productsManager.js";

class productsController
{
  static list = async  (req, res) =>
  {
      const manager = new productsManager();

      const productss = await manager.find();
      res.send({ status: 'success', productss });
  };
}

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new productsManager();

    const products = await manager.getOne(id);
    res.send({ status: 'success', products });
};

export const save = async (req, res) =>
{
  const manager = new productsManager();
  const products = await manager.create(req.body);

  res.send({ status: 'success', products, message: 'products created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new productsManager();

  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'products updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new productsManager();

  const products = await manager.deleteOne(id);
  res.send({ status: 'success', message: 'products deleted.' })
};

export default productsController;
