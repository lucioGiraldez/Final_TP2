import express from "express";
import { config } from "./config/config.js";
import { productRouter } from "./routes/product.router.js";
import { statusRouter } from "./routes/status.router.js";

const app = express();
app.use(express.json());

app.use("/api", statusRouter);
app.use("/api", productRouter);

app.listen(config.PORT, () => {
	const message = `👏🚀SERVER FUNCIONANDO CORRECTAMENTE EN http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
