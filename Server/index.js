const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

let products = [
	{
		id: 1,
		type: "plastic bottles",
		amount: 100,
		action: "collects",
		active: true,
		linked: false,
		selectedColor: "blue",
	},
	{
		id: 2,
		type: "trees",
		amount: 10,
		action: "plants",
		active: false,
		linked: true,
		selectedColor: "green",
	},
	{
		id: 3,
		type: "carbon",
		amount: 100,
		action: "offsets",
		active: false,
		linked: false,
		selectedColor: "beige",
	},
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/products", (req, res) => {
	res.send(products);
});

app.post("/products", (req, res) => {
	const id = req.query && req.query.id && +req.query.id;
	const updatedProduct = req.body;

	let productToUpdate;

	if (id) {
		productToUpdate = products.find((p) => p.id == id);
	}
	if (!productToUpdate) {
		res.status(404).send(`Product with id ${id} not found.`);
		return;
	}

	productToUpdate.active = updatedProduct.active;
	productToUpdate.linked = updatedProduct.linked;
	productToUpdate.selectedColor = updatedProduct.selectedColor;

	const productRest = products.filter((p) => p.id != id);
	products = [...productRest, productToUpdate];

	res.send(`Product with id ${id} has been updated.`);
});

module.exports = app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
