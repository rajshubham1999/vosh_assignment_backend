const router =require("express").Router();
const Product = require("../models/productModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add-product", authMiddleware, async (request, response) => {
    try {
      const newProduct = new Product(request.body);
      await newProduct.save();
      response.status(200).send({
        success: true,
        message: "Product added successfully",
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message,
      });
    }
  });

  router.post(
    "/get-all-product-by-user",
    authMiddleware,
    async (request, response) => {
      try {
        const products = await Product.find({ user: request.body.user });
        response.send({
          success: true,
          message: "Product fetched successfully",
          data: products,
        });
      } catch (err) {
        response.status(500).send({
          success: false,
          message: err.message,
        });
      }
    }
  );



 module.exports = router;
