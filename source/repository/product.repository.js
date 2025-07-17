import { JsonHandler } from "../utils/jsonManager.js";

export const ProductRepository = {
	getById: async (id) => {
		const products = await JsonHandler.read();

		if (!products) return null;

		const product = products.find((product) => product.id == id);

		if (!product) return null;

		return product;
	},

	createOne: async (product) => {
		const products = await JsonHandler.read();
		products.push(product);
		try {
			await JsonHandler.write(products);
		} catch (e) {
			console.error({ message: e.message });
		}
	},

	deleteById: async (id) => {
		const products = await JsonHandler.read();
		if (!products) return null;
		const index = products.find((product) => product.id === id);
		//const index = books.find(book => book.id == id);
		if (!index) return null;
		//if(index === -1) return null;

		const productsResponse = products.filter((product) => product.id !== id);

		try {
			await JsonHandler.write(productsResponse);
			return id;
		} catch (e) {
			return null;
		}
	},

	updateById: async (id, stock) => {
		const products = await JsonHandler.read();
		if (!products) return null;

		const productToBeModified = products.find((product) => product.id == id);
		if (!productToBeModified) return null;

		const oldProducts = products.filter((product) => product.id !== id);

		const modifiedProduct = {
			...productToBeModified,
			stock: stock,
		};

		try {
			await JsonHandler.write([...oldProducts, modifiedProduct]);
			return modifiedProduct;
		} catch (e) {
			return null;
		}
	},

	getAll: async () => {
		const products = await JsonHandler.read();

		if (!products) return null;
		return products;
	},
};
