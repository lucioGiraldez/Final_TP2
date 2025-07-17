import { Product } from "../model/product.js";
import { ProductRepository } from "../repository/product.repository.js";

export const ProductService = {
	serviceProductValidation: async (id) => {
		const idProduct = await ProductRepository.getById(id);
		if (!idProduct) return null;

		return idProduct;
	},

	serviceProductCreation: (product) => {
		const dataProduct = {
			...product,
			id: crypto.randomUUID().toString(),
		};

		const modelProduct = new Product(
			dataProduct.id,
			dataProduct.name,
			dataProduct.price,
			dataProduct.stock,
		);
		ProductRepository.createOne(modelProduct);
		//console.log(modelProduct)
		return modelProduct;
	},

	serviceProductDelete: (id) => {
		const idProduct = ProductRepository.deleteById(id);

		if (!idProduct) return null;
		return idProduct;
	},

	serviceProductUpdate: (id, stock) => {
		const product = ProductRepository.updateById(id, stock);
		if (!product) return null;
		return product;
	},

	serviceProductGetAll: () => {
		const products = ProductRepository.getAll();
		if (!products) return null;
		return products;
	},
};
