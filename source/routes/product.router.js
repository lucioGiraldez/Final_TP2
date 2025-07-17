import { Router } from "express";
import { ProductController } from "../controller/product.controller.js";

const productRouter = Router();

productRouter.post("/v1/productos", ProductController.productCreateOne);
productRouter.get("/v1/productos", ProductController.productGetAll);
productRouter.get("/v1/productos/:id", ProductController.productValidation);
productRouter.put(
	"/v1/productos/:id/updateStock",
	ProductController.productUpdateOne,
);
productRouter.delete("/v1/productos/:id", ProductController.productDeleteOne);

export { productRouter };
