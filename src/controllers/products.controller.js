import productDao from "../dao/products.dao.js";
import Products from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  productDao
    .getAll()
    .then((products) => {
      res.render("../src/views/index.ejs", { products });
    })
    .catch((err) => {
      res.json(err);
    });
};

export const getOneProduct = (req, res) => {
  const productId = req.params.bc;
  productDao
    .getOne(productId)
    .then((product) => {
      if (product) {
        res.render("../src/views/edit.ejs", { product });
      } else {
        res.json({
          status: "Product not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};

export const insertProduct = (req, res) => {
  productDao
    .insertProduct(req.body)
    .then((result) => {
      if (result) {
        res.redirect("api/products");
      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};

export const updateProduct = (req, res) => {
  productDao
    .updateProduct(req.params.bc, req.body)
    .then((result) => {
      if (result) res.redirect("/api/products/");
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};

export const deleteProduct = (req, res) => {
  productDao
    .deleteProduct(req.params.bc)
    .then((result) => {
      if (result) res.redirect("/api/products/");
      
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
  };
  
  
  export const getOneDeleteProduct = (req, res) => {
    const productId = req.params.bc;
    productDao
    .deleteProduct(productId)
    .then((product) => {
      if (product) {
        console.log("ELIMINADO");
        res.redirect("/api/products/");
         
      } else {
        res.render("../src/views/index.ejs", { products });

      }
    })
    .catch((err) => {
      res.json({
        status: "Server unavailable",
      });
    });
};