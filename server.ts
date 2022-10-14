import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import env from "dotenv";
import APIToiletsAdapter from "./infrastructure/primary/APIToiletAdapter.";
import { GetToilet } from "./domain/usecases/GetToilet";
import { ToiletAPIService } from "./infrastructure/primary/ToiletAPIService";

env.config();
const app = express();
const port = process.env.PORT;

app.get("/subway/:line/toilets", (req, res) => {
	const { line } = req.params;
	// const toiletService = new ToiletAPIService();
	const toilets = new GetToilet(new APIToiletsAdapter());
	toilets.byLine(line).then(result => {
		res.send(result);
	}).catch(e => {
		res.status(404).send(e);
	});
});

app.listen(port, () => console.log(`Listening: http://localhost:${port}`));

const swaggerConfig = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Example",
			version: "0.1.0",
			description: "Lorem Ipsum",
			license: {
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html",
			},
			contact: {
				name: "LESUEUR Yohann",
				url: "ylesueur.fr",
				email: "lesueur.yohann@hotmail.fr",
			},
		},
	},
	apis: ["./routes/books.js"],
};

const specs = swaggerJsdoc(swaggerConfig);

app.use(
	"/api/v1",
	swaggerUi.serve,
	swaggerUi.setup(specs)
);
