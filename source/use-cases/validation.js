export const validationService = {
	validateProductCreation(product) {
		const errors = [];

		if (!product) {
			errors.push("Falta el objeto product.");
			return { ok: false, errors };
		}

		if (typeof product.price !== "number" || product.price <= 0) {
			errors.push("El precio debe ser un número mayor a cero.");
		}

		if (typeof product.stock !== "number" || product.stock < 0) {
			errors.push("El stock debe ser un número mayor o igual a cero.");
		}

		if (!product.name || typeof product.name !== "string") {
			errors.push("El nombre es obligatorio y debe ser un string.");
		}

		if (errors.length > 0) {
			return { ok: false, errors };
		}

		return { ok: true };
	},

	validateStockUpdate(stock) {
		if (typeof stock !== "number" || stock < 0) {
			return {
				ok: false,
				errors: ["El stock debe ser un número mayor o igual a cero."],
			};
		}
		return { ok: true };
	},
};
