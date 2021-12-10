const ProductController = require("../controllers/product.controller");

module.exports = (app)=>{
    app.get("/api/product", ProductController.findAllProduct);

    app.post("/api/product", ProductController.createNewProduct);

    app.get("/api/product/:id", ProductController.findOneProduct);

    app.put("/api/product/:id", ProductController.updateProduct);

    app.delete("/api/product/:id", ProductController.deleteProduct);

} 