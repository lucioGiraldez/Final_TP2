import { ProductService } from "../service/product.service.js";
import { validationService } from "../use-cases/validation.js";

export const ProductController = {
	productValidation: async (req, res) => {
		const { id } = req.params;
		const product = await ProductService.serviceProductValidation(id);

		if (!product) {
			res.status(404).json({
				payload: null,
				message: "No se encuentra el producto",
				ok: false,
			});
		} else {
			res.status(200).json({
				payload: { producto: product },
				message: "Exito encontrando el producto",
				ok: true,
			});
		}
	},

	productCreateOne: async (req, res) => {
		const { product } = req.body;
		const validation = validationService.validateProductCreation(product);
		if (!validation.ok) {
			return res.status(400).json({
				ok: false,
				message: "Error en los datos enviados",
				errors: validation.errors,
				payload: null,
			});
		}

		try {
			const productResponse = ProductService.serviceProductCreation(product);
			res.status(201).json({
				payload: { ...productResponse, id: "****" },
				message: "Exito creando el producto",
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ error: e.message, mensaje: "ocurrio un error" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear el producto",
				ok: false,
			});
		}
	},

	productDeleteOne: async (req, res) => {
		const { id } = req.params;
		const idProduct = await ProductService.serviceProductDelete(id);

		if (!idProduct) {
			res.status(400).json({
				payload: null,
				message: "El producto no pudo ser borrado",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			payload: { idProducto: idProduct },
			message: `Producto:${idProduct} borrado con exito`,
			ok: true,
		});
		return;
	},

	productUpdateOne: async (req, res) => {
		const { id } = req.params;
		const { stock } = req.body;

		const validation = validationService.validateStockUpdate(stock);
		if (!validation.ok) {
			return res.status(400).json({
				payload: null,
				message: "Error en los datos enviados",
				errors: validation.errors,
				ok: false,
			});
		}

		const productUpdated = await ProductService.serviceProductUpdate(id, stock);

		if (!productUpdated) {
			res.status(404).json({
				payload: null,
				message: "No se pudo actualizar el producto",
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: `Producto: ${productUpdated.id} actualizada con exito`,
			payload: { productUpdated: productUpdated },
			ok: true,
		});
		return;
	},

	productGetAll: async (req, res) => {
		const allProducts = await ProductService.serviceProductGetAll();

		if (!allProducts) {
			res.status(404).json({
				payload: null,
				message: "No se pudo devolver la coleccion de productos",
				ok: false,
			});
			return;
		}
		res.status(200).json({
			message: "Coleccion de productos devuelta con exito",
			payload: { allProducts: allProducts },
			ok: true,
		});
	},
};
