import Product from "../models/products.model.js";

const productDao = {};

productDao.getAll = async () => {
  const products = await Product.find();
  return products;
};

productDao.getOne = async (bc) => {
  const product = await Product.findOne({barcode: bc});
  return product;
};

productDao.insertProduct = async (product) => {
  const productSaved = new Product(product);
  await productSaved.save();
  return true;
};

productDao.updateProduct = async (barcode, product) => {
  await Product.findOneAndUpdate({ barcode: barcode }, product); 
  return true;
};

productDao.deleteProduct = async (barcode) => {
  const productDelete = await Product.findOneAndDelete({barcode: barcode})
  console.log(productDelete);
  if(productDelete!=null){
    return true
  }
  else{
    return false
  }
}

export default productDao;
