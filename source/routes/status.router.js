import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/v01/status", (req, res) => {
	res.json({
		staus: 200,
		timeStatus: new Date().toISOString(),
		message: "Bienvenidos al examen, todo esta andando correctamente",
	});
});

statusRouter.get("/v02/status", (req, res) => {
	res.json({
		staus: 404,
		timeStatus: new Date().toISOString(),
		message: "Bienvenidos al examen, en este momento tenemos un error interno",
	});
});

export { statusRouter };
